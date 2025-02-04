<template>
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row :gutter="20">
      <!--Call Number-->
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.callNumber.label" :prop="fields.callNumber.name">
          <el-input v-model="model[fields.callNumber.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.author.label" :prop="fields.author.name">
          <el-input v-model="model[fields.author.name]"/>
        </el-form-item>
      </el-col>
     
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.title.label" :prop="fields.title.name">
          <el-input v-model="model[fields.title.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.publisher.label" :prop="fields.publisher.name">
          <el-input v-model="model[fields.publisher.name]"/>
        </el-form-item>
      </el-col>
      </el-row>
      <el-row :gutter="20">
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.copyright.label" :prop="fields.copyright.name">
          <el-input v-model="model[fields.copyright.name]"/>
        </el-form-item>
      </el-col>
      
      <div v-if="!value1">
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.id.label" :prop="fields.id.name"  v-if="!currentUserIsMember">
          <el-input v-model="model[fields.id.name]"/>
        </el-form-item>
      </el-col>
      </div>
      </el-row>
      <el-row :gutter="20">
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.accession_number.label" :prop="fields.accession_number.name" v-if="!currentUserIsMember">
          <el-input v-model="model[fields.accession_number.name]"/>
        </el-form-item>
      </el-col>

      <el-col style="margin-bottom: -0.41px;" :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.createdAtRange.label" :prop="fields.createdAtRange.name" v-if="!currentUserIsMember">
          <el-date-picker type="datetimerange" v-model="model[fields.createdAtRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>
    
    
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.edition.label" :prop="fields.edition.name">
          <el-input v-model="model[fields.edition.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.status.label" :prop="fields.status.name">
          <el-select placeholder v-model="model[fields.status.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.status.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      </el-row>
      <el-row :gutter="20">
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.circulationType.label" :prop="fields.circulationType.name" v-if="!currentUserIsMember">
          <el-select placeholder v-model="model[fields.circulationType.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.circulationType.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      
    </el-row>

    
    
    <div class="filter-buttons">
      <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary">
        <app-i18n code="common.search"></app-i18n>
      </el-button>

      <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo">
        <app-i18n code="common.reset"></app-i18n>
      </el-button>
    </div>
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { BookModel } from '@/modules/book/book-model';

const { fields } = BookModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.createdAtRange,
  fields.callNumber,
  fields.title,
  fields.author,
  fields.edition,
  fields.publisher,
  fields.copyright,
  fields.accession_number,
  fields.status,
  fields.circulationType,
]);

export default {
  name: 'app-book-list-filter',

  data() {
    return {
      rules: filterSchema.rules(),
      model: {},
      value1: true,
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'book/list/loading',
      filter: 'book/list/filter',
      currentUserIsMember: 'auth/currentUserIsMember'
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.model = filterSchema.initialValues(
      this.filter,
      this.$route.query,
    );

    return this.doFilter();
  },

  methods: {
    ...mapActions({
      doReset: 'book/list/doReset',
      doFetch: 'book/list/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
      });
    },
  },
};
</script>

<style>

</style>
