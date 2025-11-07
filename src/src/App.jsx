import React, { useState, useRef } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('estoque-chegada');
  const [scanValue, setScanValue] = useState('');
  const [highlightedProduct, setHighlightedProduct] = useState(null);
  
  const produtos = [
    { id: 'm_050', nome: 'Óculos Masculino', grau: '0.50', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136096' },
    { id: 'm_100', nome: 'Óculos Masculino', grau: '1.00', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136010' },
    { id: 'm_150', nome: 'Óculos Masculino', grau: '1.50', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136027' },
    { id: 'm_200', nome: 'Óculos Masculino', grau: '2.00', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136034' },
    { id: 'm_250', nome: 'Óculos Masculino', grau: '2.50', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136041' },
    { id: 'm_300', nome: 'Óculos Masculino', grau: '3.00', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136058' },
    { id: 'm_350', nome: 'Óculos Masculino', grau: '3.50', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136065' },
    { id: 'm_400', nome: 'Óculos Masculino', grau: '4.00', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136102' },
    { id: 'm_sol', nome: 'Óculos Solar', grau: 'SOL', categoria: 'Masculino', tipo: 'oculos', codigo: '7898924136119' },
    { id: 'f_050', nome: 'Óculos Feminino', grau: '0.50', categoria: 'Feminino', tipo: 'oculos', codigo: '7898924136201' },
    { id: 'f_100', nome: 'Óculos Feminino', grau: '1.00', categoria: 'Feminino', tipo: 'oculos', codigo: '7898924136202' },
    { id: 'f_150', nome: 'Óculos Feminino', grau: '1.50', categoria: 'Feminino', tipo: 'oculos', codigo: '7898924136203' },
    { id: 'f_200', nome: 'Óculos Feminino', grau: '2.00', categoria: 'Feminino', tipo: 'oculos', codigo: '7898924136204' },
    { id: 'f_250', nome: 'Óculos Feminino', grau: '2.50', categoria: 'Feminino', tipo: 'oculos', codigo: '7898924136205' },
    { id: 'f_300', nome: 'Óculos Feminino', grau: '3.00', categoria: 'Feminino', tipo: 'oculos', codigo: '7898924136206' },
    { id: 'f_350', nome: 'Óculos Feminino', grau: '3.50', categoria: 'Feminino', tipo: 'oculos', codigo: '7898924136207' },
    { id: 'f_400', nome: 'Óculos Feminino', grau: '4.00', categoria: 'Feminino', tipo: 'oculos', codigo: '7898924136208' },
    { id: 'alic_inox', nome: 'Alic. Inox', grau: '', categoria: 'Cutelaria', tipo: 'cutelaria', codigo: '7898924136157' },
    { id: 'alic_dourado', nome: 'Alic. Dourado', grau: '', categoria: 'Cutelaria', tipo: 'cutelaria', codigo: '' },
    { id: 'alic_unha', nome: 'Alic. Unha', grau: '', categoria: 'Cutelaria', tipo: 'cutelaria', codigo: '7898924136195' },
    { id: 'alic_colorido', nome: 'Alic. Colorido', grau: '', categoria: 'Cutelaria', tipo: 'cutelaria', codigo: '' },
    { id: 'cort_unha', nome: 'Cort. Unha', grau: '', categoria: 'Cutelaria', tipo: 'cutelaria', codigo: '7898924136140' },
    { id: 'kit', nome: 'Kit Pinça', grau: '', categoria: 'Cutelaria', tipo: 'cutelaria', codigo: '7898924136133' },
    { id: 'pinca_d', nome: 'Pinça Dourada', grau: '', categoria: 'Cutelaria', tipo: 'cutelaria', codigo: '7898924136171' },
    { id: 'tesourinha', nome: 'Tesourinha', grau: '', categoria: 'Cutelaria', tipo: 'cutelaria', codigo: '7898924136188' },
    { id: 'etiqueta_branca_leitura', nome: 'Etiqueta Branca', grau: 'LEITURA', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136370' },
    { id: 'etiqueta_branca_sol', nome: 'Etiqueta Branca', grau: 'SOL', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136387' },
    { id: 'etiqueta_preta_sol', nome: 'Etiqueta Preta', grau: 'SOL', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136363' },
    { id: 'etiqueta_amarela_050', nome: 'Etiqueta Amarela', grau: '0.50', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136288' },
    { id: 'etiqueta_amarela_100', nome: 'Etiqueta Amarela', grau: '1.00', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136295' },
    { id: 'etiqueta_amarela_150', nome: 'Etiqueta Amarela', grau: '1.50', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136301' },
    { id: 'etiqueta_amarela_200', nome: 'Etiqueta Amarela', grau: '2.00', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136318' },
    { id: 'etiqueta_amarela_250', nome: 'Etiqueta Amarela', grau: '2.50', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136325' },
    { id: 'etiqueta_amarela_300', nome: 'Etiqueta Amarela', grau: '3.00', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136332' },
    { id: 'etiqueta_amarela_350', nome: 'Etiqueta Amarela', grau: '3.50', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136349' },
    { id: 'etiqueta_amarela_400', nome: 'Etiqueta Amarela', grau: '4.00', categoria: 'Etiquetas', tipo: 'etiquetas', codigo: '7898924136356' },
    { id: 'travas_leitura', nome: 'Travas', grau: 'LEITURA', categoria: 'Travas', tipo: 'travas', codigo: '' },
    { id: 'travas_sol', nome: 'Travas', grau: 'SOL', categoria: 'Travas', tipo: 'travas', codigo: '' }
  ];

  const codigoToId = {};
  produtos.forEach(p => {
    if (p.codigo) {
      codigoToId[p.codigo] = p.id;
    }
  });

  const [estoqueChegada, setEstoqueChegada] = useState(() => {
    const initial = {};
    produtos.forEach(produto => {
      initial[produto.id] = 0;
    });
    return initial;
  });

  const [estoquePronto, setEstoquePronto] = useState(() => {
    const initial = {};
    produtos.forEach(produto => {
      initial[produto.id] = 0;
    });
    return initial;
  });

  const [mediaSemanalSaida] = useState({});

  const [vendedores] = useState([
    'Márcio', 'Haroldo', 'Glaudinei', 'Rafael', 'Marcondes',
    'Daniel', 'Adriano', 'Jair', 'Raul'
  ]);
  const [vendedorSelecionado, setVendedorSelecionado] = useState(vendedores[0]);
  const [estoqueVendedor, setEstoqueVendedor] = useState(() => {
    const initial = {};
    produtos.forEach(produto => {
      initial[produto.id] = 0;
    });
    return initial;
  });

  const itemRefs = useRef({});

  const handleScan = (e) => {
    if (e.key === 'Enter') {
      const codigo = scanValue.trim();
      if (codigo && codigoToId[codigo]) {
        const produtoId = codigoToId[codigo];
        setHighlightedProduct(produtoId);
        setTimeout(() => {
          const element = itemRefs.current[produtoId];
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => setHighlightedProduct(null), 3000);
          }
        }, 100);
        setScanValue('');
      } else {
        alert('Código não encontrado ou inválido!');
        setScanValue('');
      }
    }
  };

  const atualizarEstoqueChegada = (id, quantidade) => {
    setEstoqueChegada(prev => ({ ...prev, [id]: Math.max(0, prev[id] + quantidade) }));
  };
  const atualizarEstoquePronto = (id, quantidade) => {
    setEstoquePronto(prev => ({ ...prev, [id]: Math.max(0, prev[id] + quantidade) }));
  };

  const processarParaEstoquePronto = () => {
    const novoEstoquePronto = { ...estoquePronto };
    const novoEstoqueChegada = { ...estoqueChegada };

    let totalLeitura = 0;
    let totalSol = 0;

    ['m_050', 'm_100', 'm_150', 'm_200', 'm_250', 'm_300', 'm_350', 'm_400'].forEach(id => {
      const q = estoqueChegada[id];
      if (q > 0) {
        novoEstoquePronto[id] += q;
        novoEstoqueChegada[id] = 0;
        totalLeitura += q;
      }
    });
    ['f_050', 'f_100', 'f_150', 'f_200', 'f_250', 'f_300', 'f_350', 'f_400'].forEach(id => {
      const q = estoqueChegada[id];
      if (q > 0) {
        novoEstoquePronto[id] += q;
        novoEstoqueChegada[id] = 0;
        totalLeitura += q;
      }
    });
    if (estoqueChegada['m_sol'] > 0) {
      totalSol = estoqueChegada['m_sol'];
      novoEstoquePronto['m_sol'] += totalSol;
      novoEstoqueChegada['m_sol'] = 0;
    }

    const travasLeitura = (estoquePronto['travas_leitura'] || 0);
    const travasSol = (estoquePronto['travas_sol'] || 0);
    if (travasLeitura < totalLeitura || travasSol < totalSol) {
      alert('Estoque insuficiente de travas!');
      return;
    }
    novoEstoquePronto['travas_leitura'] = travasLeitura - totalLeitura;
    novoEstoquePronto['travas_sol'] = travasSol - totalSol;

    const etiquetaBranca = (estoquePronto['etiqueta_branca_leitura'] || 0);
    const etiquetaPreta = (estoquePronto['etiqueta_preta_sol'] || 0);
    if (etiquetaBranca < totalLeitura || etiquetaPreta < totalSol) {
      alert('Estoque insuficiente de etiquetas!');
      return;
    }
    novoEstoquePronto['etiqueta_branca_leitura'] = etiquetaBranca - totalLeitura;
    novoEstoquePronto['etiqueta_preta_sol'] = etiquetaPreta - totalSol;

    const mapGrau = {
      '0.50': 'etiqueta_amarela_050', '1.00': 'etiqueta_amarela_100', '1.50': 'etiqueta_amarela_150',
      '2.00': 'etiqueta_amarela_200', '2.50': 'etiqueta_amarela_250', '3.00': 'etiqueta_amarela_300',
      '3.50': 'etiqueta_amarela_350', '4.00': 'etiqueta_amarela_400'
    };
    const graus = Object.keys(mapGrau);
    for (const grau of graus) {
      const qMasc = estoqueChegada[`m_${grau.replace('.', '')}`] || 0;
      const qFem = estoqueChegada[`f_${grau.replace('.', '')}`] || 0;
      const total = qMasc + qFem;
      if (total > 0) {
        const idEtq = mapGrau[grau];
        const estoqueEtq = estoquePronto[idEtq] || 0;
        if (estoqueEtq < total) {
          alert(`Estoque insuficiente de Etiqueta Amarela ${grau}!`);
          return;
        }
        novoEstoquePronto[idEtq] = estoqueEtq - total;
      }
    }

    setEstoquePronto(novoEstoquePronto);
    setEstoqueChegada(novoEstoqueChegada);
  };

  const vendedorLevaMercadoria = () => {
    const novoEstoquePronto = { ...estoquePronto };
    for (const p of produtos) {
      if (estoqueVendedor[p.id] > novoEstoquePronto[p.id]) {
        alert('Estoque insuficiente!');
        return;
      }
    }
    for (const p of produtos) {
      if (estoqueVendedor[p.id] > 0) {
        novoEstoquePronto[p.id] -= estoqueVendedor[p.id];
      }
    }
    setEstoquePronto(novoEstoquePronto);
    const reset = {};
    produtos.forEach(p => reset[p.id] = 0);
    setEstoqueVendedor(reset);
  };

  const calcularSemanasEstoqueTotal = (id) => {
    const total = (estoqueChegada[id] || 0) + (estoquePronto[id] || 0);
    const media = mediaSemanalSaida[id] || 0;
    if (media === 0) return total > 0 ? '∞' : '0';
    return (total / media).toFixed(1);
  };

  const InputQuantidade = ({ valorAtual, onConfirmar }) => {
    const [valorTemp, setValorTemp] = useState(valorAtual);
    const handleInputChange = (e) => {
      const val = e.target.value;
      if (val === '' || /^\d+$/.test(val)) {
        setValorTemp(val === '' ? '' : parseInt(val));
      }
    };
    const handleBlur = () => {
      const valorFinal = valorTemp === '' ? 0 : valorTemp;
      onConfirmar(valorFinal);
      setValorTemp(valorFinal);
    };
    const handleIncrement = () => {
      const novo = (valorTemp || 0) + 1;
      setValorTemp(novo);
      onConfirmar(novo);
    };
    const handleDecrement = () => {
      const novo = Math.max(0, (valorTemp || 0) - 1);
      setValorTemp(novo);
      onConfirmar(novo);
    };
    return (
      <div className="flex items-center space-x-2">
        <button type="button" onClick={handleDecrement} className="w-8 h-8 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center font-bold text-lg">-</button>
        <input
          type="text"
          value={valorTemp === 0 ? '' : valorTemp}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-20 text-center p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="0"
        />
        <button type="button" onClick={handleIncrement} className="w-8 h-8 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center font-bold text-lg">+</button>
      </div>
    );
  };

  const produtosPorCategoria = produtos.reduce((acc, p) => {
    if (!acc[p.categoria]) acc[p.categoria] = [];
    acc[p.categoria].push(p);
    return acc;
  }, {});

  const TabelaEstoque = ({ titulo, estoque, onAtualizar, mostrarBotoes = true, mostrarMedia = false }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">{titulo}</h2>
      <div className="space-y-8">
        {Object.entries(produtosPorCategoria).map(([categoria, lista]) => (
          <div key={categoria}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-gray-50 p-3 rounded-lg">{categoria}</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Produto</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Grau</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Quantidade</th>
                    {mostrarMedia && (
                      <>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Média Semanal</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-700">Semanas</th>
                      </>
                    )}
                    {mostrarBotoes && <th className="text-center py-3 px-4 font-semibold text-gray-700">Ações</th>}
                  </tr>
                </thead>
                <tbody>
                  {lista.map((p) => (
                    <tr
                      key={p.id}
                      ref={el => itemRefs.current[p.id] = el}
                      className={`border-b border-gray-100 hover:bg-gray-50 ${highlightedProduct === p.id ? 'bg-yellow-100' : ''}`}
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {p.nome} {p.codigo && <span className="text-xs text-gray-500 ml-2">({p.codigo})</span>}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700">{p.grau || '-'}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">{estoque[p.id]}</span>
                      </td>
                      {mostrarMedia && (
                        <>
                          <td className="py-3 px-4 text-center">
                            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                              {mediaSemanalSaida[p.id] || 0}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full font-semibold ${
                              calcularSemanasEstoqueTotal(p.id) === '∞' ? 'bg-green-100 text-green-800' :
                              parseFloat(calcularSemanasEstoqueTotal(p.id)) < 2 ? 'bg-red-100 text-red-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {calcularSemanasEstoqueTotal(p.id)} semanas
                            </span>
                          </td>
                        </>
                      )}
                      {mostrarBotoes && (
                        <td className="py-3 px-4 text-center">
                          <InputQuantidade
                            valorAtual={estoque[p.id]}
                            onConfirmar={(valor) => onAtualizar(p.id, valor - estoque[p.id])}
                          />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TabelaAnaliseEstoque = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Análise de Estoque - Total (Chegada + Pronto)</h2>
      <div className="space-y-8">
        {Object.entries(produtosPorCategoria).map(([categoria, lista]) => (
          <div key={categoria}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-gray-50 p-3 rounded-lg">{categoria}</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Produto</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Grau</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Chegada</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Pronto</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Total</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Média Semanal</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Semanas</th>
                  </tr>
                </thead>
                <tbody>
                  {lista.map((p) => {
                    const total = (estoqueChegada[p.id] || 0) + (estoquePronto[p.id] || 0);
                    return (
                      <tr
                        key={p.id}
                        ref={el => itemRefs.current[p.id] = el}
                        className={`border-b border-gray-100 hover:bg-gray-50 ${highlightedProduct === p.id ? 'bg-yellow-100' : ''}`}
                      >
                        <td className="py-3 px-4 font-medium text-gray-900">
                          {p.nome} {p.codigo && <span className="text-xs text-gray-500 ml-2">({p.codigo})</span>}
                        </td>
                        <td className="py-3 px-4 text-center text-gray-700">{p.grau || '-'}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                            {estoqueChegada[p.id] || 0}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                            {estoquePronto[p.id] || 0}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">
                            {total}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                            {mediaSemanalSaida[p.id] || 0}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full font-semibold ${
                            calcularSemanasEstoqueTotal(p.id) === '∞' ? 'bg-green-100 text-green-800' :
                            parseFloat(calcularSemanasEstoqueTotal(p.id)) < 2 ? 'bg-red-100 text-red-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {calcularSemanasEstoqueTotal(p.id)} semanas
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">OC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Controle de Estoque - Óculos</h1>
                <p className="text-gray-600">Sistema pronto para uso na empresa</p>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <label className="block text-sm font-medium text-gray-700 mb-1">🔍 Escanear Código de Barras</label>
              <input
                type="text"
                value={scanValue}
                onChange={(e) => setScanValue(e.target.value)}
                onKeyDown={handleScan}
                placeholder="Digite ou escaneie o código e pressione Enter"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-4 mb-8">
          {['estoque-chegada', 'estoque-pronto', 'saida-vendedor', 'analise-estoque'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab === 'estoque-chegada' && 'Estoque Chegada'}
              {tab === 'estoque-pronto' && 'Estoque Pronto'}
              {tab === 'saida-vendedor' && 'Saída Vendedor'}
              {tab === 'analise-estoque' && 'Análise de Estoque'}
            </button>
          ))}
        </div>

        {activeTab === 'estoque-chegada' && (
          <div className="space-y-6">
            <TabelaEstoque titulo="Estoque de Chegada (Fornecedor)" estoque={estoqueChegada} onAtualizar={atualizarEstoqueChegada} />
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <button
                onClick={processarParaEstoquePronto}
                disabled={Object.values(estoqueChegada).every(q => q === 0)}
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Processar Todos para Estoque Pronto
              </button>
            </div>
          </div>
        )}

        {activeTab === 'estoque-pronto' && (
          <div className="space-y-6">
            <TabelaEstoque titulo="Estoque Pronto (Gravado e Embalado)" estoque={estoquePronto} onAtualizar={atualizarEstoquePronto} />
          </div>
        )}

        {activeTab === 'saida-vendedor' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Saída de Produtos para Vendedor</h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Selecione o Vendedor</label>
                <select
                  value={vendedorSelecionado}
                  onChange={(e) => setVendedorSelecionado(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {vendedores.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="space-y-8">
                {Object.entries(produtosPorCategoria).map(([categoria, lista]) => (
                  <div key={categoria}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-gray-50 p-3 rounded-lg">{categoria}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Produto</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700">Grau</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700">Estoque Pronto</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700">Quantidade para Levar</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lista.map(p => (
                            <tr
                              key={p.id}
                              ref={el => itemRefs.current[p.id] = el}
                              className={`border-b border-gray-100 ${highlightedProduct === p.id ? 'bg-yellow-100' : ''}`}
                            >
                              <td className="py-3 px-4 font-medium text-gray-900">
                                {p.nome} {p.codigo && <span className="text-xs text-gray-500 ml-2">({p.codigo})</span>}
                              </td>
                              <td className="py-3 px-4 text-center text-gray-700">{p.grau || '-'}</td>
                              <td className="py-3 px-4 text-center">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">{estoquePronto[p.id]}</span>
                              </td>
                              <td className="py-3 px-4 text-center">
                                <InputQuantidade
                                  valorAtual={estoqueVendedor[p.id]}
                                  onConfirmar={(valor) => setEstoqueVendedor(prev => ({ ...prev, [p.id]: valor }))}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={vendedorLevaMercadoria}
                  disabled={Object.values(estoqueVendedor).every(q => q === 0)}
                  className="px-8 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Confirmar Saída para Vendedor
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analise-estoque' && (
          <div className="space-y-6">
            <TabelaAnaliseEstoque />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
