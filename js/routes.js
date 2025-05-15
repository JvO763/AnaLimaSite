//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  view: {
    stackPages: true,      // Mantém o histórico das páginas com animação lateral
    animate: true,          // Ativa as animações
    transition: 'f7-flip',  // Faz a transição "deslizar para o lado"
    iosSwipeBack: true, // permite voltar com gesto
    
},
  // Add default routes
  routes: [
    {
      path: '/loadingindex/',
      url: 'loadingindex.html',

	  on: {
		pageBeforeIn: function (event, page) {
      
		},
		pageAfterIn: function (event, page) {
		// fazer algo antes da página ser exibida
		// fazer algo depois da página ser exibida
     setTimeout(() => {
      window.location.href = 'index.html';
     }, 1000); // 7000 ms = 7 segundos
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/index/',
      url: 'index.html',

	  on: {
		pageBeforeIn: function (event, page) {
      
		},
		pageAfterIn: function (event, page) {
		// fazer algo antes da página ser exibida
		// fazer algo depois da página ser exibida
     setTimeout(() => {
      //carregarProdutos();
     }, 1000); // 7000 ms = 7 segundos
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },

    {
      path: '/loadinglink2/',
      url: 'loadinglink2.html',

	  on: {
		pageBeforeIn: function (event, page) {
      setTimeout(() => {
        window.location.href = 'link2.html';
       }, 1000); // 7000 ms = 7 segundos
		},
		pageAfterIn: function (event, page) {
		// fazer algo antes da página ser exibida
		// fazer algo depois da página ser exibida
     
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/link2/',
      url: 'link2.html',

	  on: {
		pageBeforeIn: function (event, page) {
      setTimeout(() => {
        carregarProdutos2();
       }, 1000); // 7000 ms = 7 segundos
		},
		pageAfterIn: function (event, page) {
		// fazer algo antes da página ser exibida
		// fazer algo depois da página ser exibida
    
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    
    {
      path: '/loadinglink3/',
      url: 'loadinglink3.html',

	  on: {
		pageBeforeIn: function (event, page) {
      
		},
		pageAfterIn: function (event, page) {
		// fazer algo antes da página ser exibida
		// fazer algo depois da página ser exibida
     setTimeout(() => {
      window.location.href = 'link3.html';
     }, 1000); // 7000 ms = 7 segundos
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/link3/',
      url: 'link3.html',

	  on: {
		pageBeforeIn: function (event, page) {
      
		},
		pageAfterIn: function (event, page) {
		// fazer algo antes da página ser exibida
		// fazer algo depois da página ser exibida
     setTimeout(() => {
      carregarProdutos3();
     }, 1000); // 7000 ms = 7 segundos
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    
    {
      path: '/loadinglink4/',
      url: 'loadinglink4.html',

	  on: {
		pageBeforeIn: function (event, page) {
      
		},
		pageAfterIn: function (event, page) {
		// fazer algo antes da página ser exibida
		// fazer algo depois da página ser exibida
     setTimeout(() => {
      window.location.href = 'link4.html';
     }, 1000); // 7000 ms = 7 segundos
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/link4/',
      url: 'link4.html',

	  on: {
		pageBeforeIn: function (event, page) {
      
		},
		pageAfterIn: function (event, page) {
		// fazer algo antes da página ser exibida
		// fazer algo depois da página ser exibida
     setTimeout(() => {
      carregarProdutos4();
     }, 1000); // 7000 ms = 7 segundos
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    }
  ],
  
});

//Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});

function onDeviceReady() {
  //Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
  document.addEventListener("backbutton", function (e) {

    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

}
