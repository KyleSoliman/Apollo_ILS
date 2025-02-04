



<template>
  
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
      width="180%"
    >
      <el-table-column type="selection" width="40"></el-table-column>

      <!---<el-table-column :label="fields.id.label" :prop="fields.id.name" sortable="custom" v-if="!value1">
        <template slot-scope="scope">{{ presenter(scope.row, 'id') }}</template>
      </el-table-column> -->

      <div v-if="!value1">
      <el-table-column
      :label="fields.id.label"
      :prop="fields.id.name"
      sortable="custom"
  >
      <template slot-scope="scope">{{ presenter(scope.row, 'id') }}</template>
      </el-table-column>

      </div>

      <el-table-column
        :label="fields.callNumber.label"
        :prop="fields.callNumber.name"
        sortable="custom"
        width="150"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'callNumber') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.title.label"
        :prop="fields.title.name"
        sortable="custom"
        show-overflow-tooltip
        width="150"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'title') }}</template>
        
      </el-table-column>

      <el-table-column
        :label="fields.author.label"
        :prop="fields.author.name"
        sortable="custom"
        width="150"
        show-overflow-tooltip
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'author') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.edition.label"
        :prop="fields.edition.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'edition') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.publisher.label"
        :prop="fields.publisher.name"
        sortable="custom"
        width="130"
        show-overflow-tooltip
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'publisher') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.copyright.label"
        :prop="fields.copyright.name"
        sortable="custom"
        width="90"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'copyright') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.accession_number.label"
        :prop="fields.accession_number.name"
        sortable="custom"
        v-if="!currentUserIsMember"
        width="110"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'accession_number') }}</template>
      </el-table-column>

      <div v-if="!value1">
      <el-table-column
        :label="fields.images.label"
        :prop="fields.images.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'images')"></app-list-item-image>
        </template>
      </el-table-column>
      </div>

      <el-table-column
        :label="fields.status.label"
        :prop="fields.status.name"
        sortable="custom"
        width="90"
      >
        <template slot-scope="scope">
          <app-book-status-tag :value="scope.row.status" />
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.circulationType.label"
        :prop="fields.circulationType.name"
        sortable="custom"
        v-if="!currentUserIsMember"
        width="95"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'circulationType') }}</template>
      </el-table-column>

      <div v-if="!value1">
      <el-table-column
        :label="fields.createdAt.label"
        :prop="fields.createdAt.name"
        sortable="custom"
        
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
      </el-table-column>
      </div>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="150">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/book/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/book/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { BookModel } from '@/modules/book/book-model';
import { mapGetters, mapActions } from 'vuex';
import { BookPermissions } from '@/modules/book/book-permissions';
import { i18n } from '@/i18n';
import BookStatusTag from '@/modules/book/components/book-status-tag.vue';

const { fields } = BookModel;

export default {
  name: 'app-book-list-table',
  data() {
    return {
      value1: true,
      value2: false,
    }
  },

  components: {
    [BookStatusTag.name]: BookStatusTag,
  },

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'book/list/rows',
      count: 'book/list/count',
      loading: 'book/list/loading',
      pagination: 'book/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'book/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
      currentUserIsMember: 'auth/currentUserIsMember'
    }),

    hasPermissionToEdit() {
      return new BookPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new BookPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'book/list/doChangeSort',
      doChangePaginationCurrentPage:
        'book/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'book/list/doChangePaginationPageSize',
      doMountTable: 'book/list/doMountTable',
      doDestroy: 'book/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return BookModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>

</style>
