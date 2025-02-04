const ptBR = {
  common: {
    or: 'o',
    cancel: 'kanselahon',
    reset: 'Ibalik sa Orihinal',
    save: 'I-Save',
    search: 'Hanapin',
    edit: 'I-Edit',
    remove: 'Alisin',
    new: 'Bago',
    export: 'Eksport sa excel',
    noDataToExport: 'Walang datos na maaaring i-export',
    import: 'Import',
    discard: 'Itapon',
    yes: 'Oo',
    no: 'Hindi',
    pause: 'Hinto',
    areYouSure: 'Sigurado Ka?',
    view: 'Suriin',
    destroy: 'Wasakin',
    mustSelectARow: 'Kailangang pumili ng isang hilera.',
    confirm: 'Kumpirmahin',
  },

  app: {
    title: 'AMA SCHOOL OF MEDICINE',
  },

  entities: {
    loan: {
      name: 'Loan',
      label: 'Loans',
      menu: 'Loans',
      exporterFileName: 'Loan_exportados',
      list: {
        menu: 'Loans',
        title: 'Loans',
      },
      create: {
        success: 'Loan salvo com sucesso',
      },
      update: {
        success: 'Loan salvo com sucesso',
      },
      destroy: {
        success: 'Loan deletado com sucesso',
      },
      destroyAll: {
        success: 'Loan(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Loan',
      },
      fields: {
        id: 'Id',
        'book': 'Libro',
        'member': 'Miyembro',
        'issueDateRange': 'Saklaw ng Petsa ng Isyu',
        'issueDate': 'Petsa ng Isyu',
        'dueDateRange': 'Saklaw ng Huling Petsa ng Pagbabalik',
        'dueDate': 'Huling Petsa ng Pagbabalik',
        'returnDateRange': 'Saklaw ng Itinalagang Petsa ng Pagbabalik ng Aklat',
        'returnDate': 'Itinalagang Petsa ng Pagbabalik ng Aklat',
        'status': 'Status',
        createdAt: 'Petsa ng Paglikha',
        updatedAt: 'Petsa ng Pag-update',
        createdAtRange: 'Saklaw ng Petsa ng Paglikha',
      },
      enumerators: {
        'status': {
          'inProgress': 'InProgress',
          'overdue': 'Overdue',
          'closed': 'Closed',
        },
      },
      new: {
        title: 'Gumawa ng Panibagong Loan Issue',
      },
      view: {
        title: 'Tignan ang Datos ng Paghiram',
      },
      importer: {
        title: 'Import Loans',
        fileName: 'loan_template_import',
        hint:
          'Ang mga Arquivos/Images ay dapat mga URL ng mga file, na nakahiwalay ng espasyo. Ang mga Relasyon ay dapat mga ID na nakahiwalay ng espasyo.',
      },
    },

    book: {
      name: 'Libro',
      label: 'Books',
      menu: 'Books',
      exporterFileName: 'Book_export',
      list: {
        menu: 'Books',
        title: 'Books',
      },
      create: {
        success: 'Ang libro ay na i-save ng matagumpay',
      },
      update: {
        success: 'Ang libro ay na i-update ng matagumpay',
      },
      destroy: {
        success: 'Ang libro ay na i-itapon ng matagumpay',
      },
      destroyAll: {
        success: 'Ang lahat ng libro ay matagumpay na naitapon',
      },
      edit: {
        title: 'I-Edit ang Aklat',
      },
      fields: {
        id: 'Id',
        'callNumber': 'Call Number',
        'title': 'Title',
        'author': 'Author',
        'publisher': 'Publisher',
        'copyright': 'Copyright',
        'edition': 'Edition',
        'numberOfCopiesRange': 'Number Of Copies',
        'numberOfCopies': 'Number Of Copies',
        'stockRange': 'Stock',
        'stock': 'Stock',
        'images': 'Images',
        'status': 'Status',
        createdAt: 'Ginawa noong',
        updatedAt: 'Na-update noong',
        createdAtRange: 'Nilikha noong saklaw',
      },
      enumerators: {
        'status': {
          'available': 'Available',
          'unavailable': 'Unavailable',
        },
      },
      new: {
        title: 'Bagong Libro',
      },
      view: {
        title: 'Suriin ang Libro',
      },
      importer: {
        title: 'Import Books',
        fileName: 'book_template_imports',
        hint:
          'Ang mga Arquivos/Larawan ay dapat mga URL ng mga file, na pinaghihiwalay ng espasyo. Ang mga Relasyon ay dapat mga ID na pinaghihiwalay ng espasyo.',
      },
    },
  },

  auth: {
    profile: {
      title: 'I-edit ang Profile',
      success: 'Matagumpay na na-update ang profile',
    },
    createAnAccount: 'Lumikha ng Account',
    rememberMe: 'Ipaalala sa akin',
    forgotPassword: 'Nakalimutan ang password',
    signin: 'Mag-login',
    signup: 'Mag-sign up',
    signout: 'Mag-logout',
    alreadyHaveAnAccount: 'May account ka na? Mag-Login',
    signinWithAnotherAccount: 'Mag-login gamit ang ibang account',
    emailUnverified: {
      message: `Paki-check ang iyong email sa <strong>{0}</strong> upang magpatuloy.`,
      submit: `Muling ipadala ang kumpirmasyon sa email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    editor: {
      label: 'Editor',
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description:
        'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description:
        'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description:
        'Acesso de visualização a todas as entidades',
    },
    loanEditor: {
      label: 'Editor de Loans',
      description: 'Acesso de edição aos Loans',
    },
    loanViewer: {
      label: 'Visualizador de Loans',
      description: 'Acesso de visualização aos Loans',
    },
    bookEditor: {
      label: 'Editor de Books',
      description: 'Acesso de edição aos Books',
    },
    bookViewer: {
      label: 'Visualizador de Books',
      description: 'Acesso de visualização aos Books',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
      loanPeriodInDays: 'Loan Period (In Days)',
    },
    colors: {
      default: 'Padrão',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  home: {
    menu: 'Home',
    /*message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/src/modules/home/components/home-page.vue.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    }, */
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
      invalid: '${path} deve ser um número',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
