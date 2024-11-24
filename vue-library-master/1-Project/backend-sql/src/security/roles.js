class Roles {
  static get values() {
    return {
      librarian: 'librarian',
      patrons: 'patrons',
      /*viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      loanEditor: 'loanEditor',
      loanViewer: 'loanViewer',
      bookEditor: 'bookEditor',
      bookViewer: 'bookViewer',*/
    };
  }
}

module.exports = Roles;
