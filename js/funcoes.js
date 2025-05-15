async function carregarProdutos() {
    console.log("CARREGANDO PRODUTOS...");
    try {
      $$('#preloader').show();
      const resposta = await fetch("https://script.google.com/macros/s/AKfycbyXDWkX4mXl8-3gCIQ3hfgtjEQw6idQmSJmCqv_9W8F3_ebLHkVTy8yFAAti9jFCuhUBg/exec");
      const dados = await resposta.json();
  
      // Adicionando log para verificar os dados recebidos
      console.log("Dados recebidos:", dados);
  
      if (dados.erro) {
        console.error("Erro:", dados.erro);
        return;
      }
  
      const container = document.getElementById("produtos");
      if (!container) {
        console.warn("Container #produtos não encontrado");
        return;
      }
  
      container.innerHTML = "";
  
      dados.produtos.forEach(produto => {
        const nome = produto["Nome do Item"] || "Sem nome";
        const cor = String(produto["Cor"] || "?").toUpperCase();
        const tamanho = String(produto["Tamanho"] || "?").toUpperCase();
        const preco = parseFloat(produto["Preço de venda"] || 0).toFixed(2);
        const preco2 = parseFloat(produto["Preço de custo"] || 0).toFixed(2);
        const marca = String(produto["Marca"] || "").toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  
        const card = `
          <div class="card">
            <div class="card-content card-content-padding">
              <div style="display: flex; justify-content: space-between;">
                <div style="flex: 1;">
                  <p><strong>${nome}</strong></p>
                  <p>Cor: ${cor}</p>
                  <p>Tam: ${tamanho}</p>
                </div>
                <div style="text-align: right;">
                  <p style="font-size: 1.2em; font-weight: bold;">Venda: R$ ${preco}</p>
                  <p style="font-size: 0.8em;">Custo: R$ ${preco2}</p>
                  <p style="color: gray;">Marca: ${marca}</p>
                </div>
              </div>
            </div>
          </div>`;
        container.innerHTML += card;
      });
  
      $$('#preloader').hide();
    } catch (e) {
      console.error("Erro ao carregar produtos:", e);
      $$('#preloader').hide();
    }
  }
  
  async function carregarProdutos2() {
    console.log("CARREGANDO REGISTROS...");
    try {
      $$('#preloader').show();
  
      const resposta = await fetch("https://script.google.com/macros/s/AKfycbzuNP6wOU5_VZpnM9N4Co8iAZ9hqBSaBM_MJEQtc71Q5AvQRxVsv6EK6JsG9pxdT1aCqQ/exec");
      const dados = await resposta.json();
  
      console.log("Dados recebidos:", dados);
  
      if (dados.erro) {
        console.error("Erro:", dados.erro);
        return;
      }
  
      const container = document.getElementById("registros");
      if (!container) {
        console.warn("Container #registros não encontrado");
        return;
      }
  
      container.innerHTML = "";
  
      dados.registros.forEach(registro => {
        const data = new Date(registro["Data"]).toLocaleString() || "";
        const nome = registro["Nome".trim()] || "Sem nome";
        const codigo = registro["Código"] || "-";
        const addRemove = registro["Add/Remove".trim()] || "-";
        const tipoSaida = registro["Tipo de Saída".trim()] || "-";
        const qtd = registro["Qtd"] || "0";
        const marca = String(registro["Marca"] || "").toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
        const tamanho = String(registro["Tamanho"] || "?").toUpperCase();
        const cor = String(registro["Cor"] || "?").toUpperCase();
        const precoCusto = parseFloat(registro["Preço de custo"] || 0).toFixed(2);
        const precoVenda = parseFloat(registro["Preço de venda"] || 0).toFixed(2);
        const obs = registro["Obs".trim()] || "";
  
        const card = `
          <div class="card">
            <div class="card-content card-content-padding">
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 50%;">
                  <p><strong>${nome}</strong></p>
                  <p>Código: ${codigo}</p>
                  <p>Cor: ${cor}</p>
                  <p>Tam: ${tamanho}</p>
                  <p>Marca: ${marca}</p>
                  <p>Qtd: ${qtd}</p>
                </div>
                <div style="flex: 1; min-width: 50%; text-align: right;">
                  <p><strong>${addRemove}</strong> - ${tipoSaida}</p>
                  <p>Venda: <strong>R$ ${precoVenda}</strong></p>
                  <p style="font-size: 0.85em;">Custo: R$ ${precoCusto}</p>
                  <p style="font-size: 0.8em; color: gray;">${obs}</p>
                  <p style="font-size: 0.75em; color: #888;">${data}</p>
                </div>
              </div>
            </div>
          </div>`;
        container.innerHTML += card;
      });
  
      $$('#preloader').hide();
    } catch (e) {
      console.error("Erro ao carregar registros:", e);
      $$('#preloader').hide();
    }
  }

  async function carregarProdutos3() {
    console.log("CARREGANDO clienteS...");
    try {
      $$('#preloader').show();
  
      const resposta = await fetch("https://script.google.com/macros/s/AKfycbwkVyvX5tmQLVb4bWW6mpy-Yq5BCfOQfX-YoT3MXrbkxcAKOd378Z82UG5ZeFLjqcpuLg/exec");
      const dados = await resposta.json();
  
      console.log("Dados recebidos:", dados);
  
      if (dados.erro) {
        console.error("Erro:", dados.erro);
        return;
      }
  
      const container = document.getElementById("clientes");
      if (!container) {
        console.warn("Container #clientes não encontrado");
        return;
      }
  
      container.innerHTML = "";
  
      dados.clientes.forEach(cliente => {
        const nome = cliente["Nome".trim()] || "Sem nome";
        const contato = cliente["Contato"] || "-";
        const valorGasto = cliente["Valor gasto".trim()] || "-";
        const tamanho = String(cliente["Tamanho"] || "?").toUpperCase();
  
        const card = `
          <div class="card">
            <div class="card-content card-content-padding">
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 50%;">
                  <p><strong>${nome}</strong></p>
                  <p>Contato: ${contato}</p>
                  <p>Tam: ${tamanho}</p>
                </div>
                <div style="flex: 1; min-width: 50%; text-align: right;">
                  <p><strong>${valorGasto}</strong></p>
                </div>
              </div>
            </div>
          </div>`;
        container.innerHTML += card;
      });
  
      $$('#preloader').hide();
    } catch (e) {
      console.error("Erro ao carregar clientes:", e);
      $$('#preloader').hide();
    }
  }
  
function mostrarLoading() {
    document.getElementById('loading-screen').style.display = 'flex';
  }
  
  function esconderLoading() {
    document.getElementById('loading-screen').style.display = 'none';
  }
  