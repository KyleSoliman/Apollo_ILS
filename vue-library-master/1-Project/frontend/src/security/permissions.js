import Roles from '@/security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.librarian,
          /*roles.iamSecurityReviewer,
          roles.editor, */
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.librarian,
          /* roles.iamSecurityReviewer,
          roles.editor, */
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.librarian,
          /*roles.iamSecurityReviewer,
          roles.editor, */
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.librarian,
          /*roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,*/
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.librarian,
         /* roles.editor,
          roles.viewer,

          roles.loanEditor,
          roles.loanViewer, */
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.librarian],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.librarian],
      },
      loanImport: {
        id: 'loanImport',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.entityEditor,
          roles.loanEditor, */
        ],
      },
      loanCreate: {
        id: 'loanCreate',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.entityEditor,
          roles.loanEditor, */
        ],
        allowedStorageFolders: ['loan'],
      },
      loanEdit: {
        id: 'loanEdit',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.entityEditor,
          roles.loanEditor, */
        ],
        allowedStorageFolders: ['loan'],
      },
      loanDestroy: {
        id: 'loanDestroy',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.entityEditor,
          roles.loanEditor, */
        ],
        allowedStorageFolders: ['loan'],
      },
      loanRead: {
        id: 'loanRead',
        allowedRoles: [
          roles.librarian, roles.patrons,
          /*roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.loanEditor,
          roles.loanViewer, */
        ],
      },
      loanAutocomplete: {
        id: 'loanAutocomplete',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.loanEditor,
          roles.loanViewer, */

        ],
      },

      bookImport: {
        id: 'bookImport',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.entityEditor,
          roles.bookEditor,*/
        ],
      },
      bookCreate: {
        id: 'bookCreate',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.entityEditor,
          roles.bookEditor, */
        ],
        allowedStorageFolders: ['book'],
      },
      bookEdit: {
        id: 'bookEdit',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.entityEditor,
          roles.bookEditor, */
        ],
        allowedStorageFolders: ['book'],
      },
      bookDestroy: {
        id: 'bookDestroy',
        allowedRoles: [
          roles.librarian,
          /*roles.editor,
          roles.entityEditor,
          roles.bookEditor, */
        ],
        allowedStorageFolders: ['book'],
      },
      bookRead: {
        id: 'bookRead',
        allowedRoles: [
          roles.librarian, roles.patrons,
          /*roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.bookEditor,
          roles.bookViewer,*/
        ],
      },
      bookAutocomplete: {
        id: 'bookAutocomplete',
        allowedRoles: [
          roles.librarian, roles.patrons,
          /*roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.bookEditor,
          roles.bookViewer,
          roles.loanEditor,
          roles.loanViewer,*/
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
