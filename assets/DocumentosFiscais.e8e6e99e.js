import{_ as M,cA as U,cP as k,r as x,aw as ee,o as f,d as _,w as m,f as l,z as L,C as d,av as oe,h as G,H as z,Q as w,N as K,i as W,k as y,O as Y,p as F,F as S,aO as te,s as ae,e as I,D as Z,a3 as ie,az as N,u as A,bE as re,bz as s,bu as j,bt as V,bd as h,bF as ne,ay as D,bB as g,bA as E,aA as X,bC as se,bl as le,bv as v,bw as T,by as P,c2 as ce,j as B,S as O,t as C,m as q,P as J,bg as me,T as Q,U as ue}from"./index.ce7a7bf4.js";import{C as pe}from"./Campo.2012dbd0.js";import{c as R,a as $}from"./compactarValidarNFe.eca82c7d.js";import{a as de,g as fe,b as Ce,o as he,d as ge,e as Ne,c as ve,f as Fe,h as be,i as we,t as Ee}from"./obterItens.77066829.js";const Pe={components:{Campo:pe},data(){return{cpfCnpjErro:!1,cpfCnpjInvalido:"",tipoCaixa:""}},emits:["confirmar","update:modelValue"],methods:{eventoConfirmar(){if(!this.dados.incluirCpfCnpjNoCupom)this.dados.cpfCnpj="",this.dados.nomeCliente="";else if(!!this.dados.cpfCnpj&&!U(this.dados.cpfCnpj)){this.cpfCnpjErro=!0,this.cpfCnpjInvalido="CPF / CNPJ Inv\xE1lido!";return}this.eventoInput(!1),this.$emit("confirmar",this.dados)},eventoInput(e){this.$emit("update:modelValue",e)},validaCpfCnpj(){if(!!this.dados.cpfCnpj&&!U(this.dados.cpfCnpj)){this.cpfCnpjErro=!0,this.cpfCnpjInvalido="CPF / CNPJ Inv\xE1lido!";return}}},watch:{async modelValue(){let e;!this.modelValue||(e=this.dados.tipoCaixa,e==="SAT"&&(e=await k.hwDest(this.dados.idEmpresa)),this.tipoCaixa=e,this.cpfCnpjErro=!1,this.cpfCnpjInvalido="")}},props:{modelValue:{required:!0,type:Boolean},dados:{required:!0,type:Object}}};function _e(e,a,t,i,o,r){const c=x("campo"),u=x("g-col"),n=x("g-row"),p=ee("mask");return f(),_(Z,{"model-value":t.modelValue,"onUpdate:modelValue":r.eventoInput},{default:m(()=>[l(L,{class:"bg-white",style:{width:"450px"}},{default:m(()=>[d("form",{onSubmit:a[4]||(a[4]=oe((...b)=>r.eventoConfirmar&&r.eventoConfirmar(...b),["prevent"]))},[l(G,{class:"bg-primary text-white q-pa-sm"},{default:m(()=>[z(l(w,{icon:"arrow_back",round:"",flat:"",dense:""},null,512),[[K]]),l(W,null,{default:m(()=>[y("CPF/CNPJ no Cupom")]),_:1}),l(w,{type:"submit",label:`Emitir ${o.tipoCaixa}`,color:"white","text-color":"primary",unelevated:""},null,8,["label"])]),_:1}),l(Y,{class:"no-padding"},{default:m(()=>[l(n,{gutter:"md",mg:"xl-y"},{default:m(()=>[l(u,{col:"12"},{default:m(()=>[l(c,{modelValue:t.dados.incluirCpfCnpjNoCupom,"onUpdate:modelValue":a[0]||(a[0]=b=>t.dados.incluirCpfCnpjNoCupom=b),tipo:"logico",rotulo:"Incluir CPF/CNPJ no cupom"},null,8,["modelValue"])]),_:1}),t.dados.incluirCpfCnpjNoCupom?(f(),F(S,{key:0},[l(u,{col:"12"},{default:m(()=>[l(te,{error:o.cpfCnpjErro,"error-label":"CPF/CNPJ inv\xE1lido"},{default:m(()=>[z(l(ae,{modelValue:t.dados.cpfCnpj,"onUpdate:modelValue":[a[1]||(a[1]=b=>t.dados.cpfCnpj=b),a[2]||(a[2]=b=>o.cpfCnpjErro=!1)],label:"CPF / CNPJ",class:"hide-bottom-space",onChange:r.validaCpfCnpj},null,8,["modelValue","onChange"]),[[p,["###.###.###-##","##.###.###/####-##"]]])]),_:1},8,["error"])]),_:1}),l(u,{col:"12"},{default:m(()=>[l(c,{modelValue:t.dados.nomeCliente,"onUpdate:modelValue":a[3]||(a[3]=b=>t.dados.nomeCliente=b),rotulo:"Nome"},null,8,["modelValue"])]),_:1})],64)):I("",!0)]),_:1})]),_:1})],32)]),_:1})]),_:1},8,["model-value","onUpdate:modelValue"])}var ye=M(Pe,[["render",_e]]);const Se={components:{SeletorCest:ie},computed:{campos(){return this.modal.campos}},data(){return{itens:[]}},emits:["confirmar"],methods:{async atualizar(){try{this.$lodash.get(this.campos,"ids.length")?(this.itens=await N().item.where("id").anyOf(this.campos.ids).toArray(),this.itensOriginal=this.$utils.clonarV2(this.itens)):this.itens=[]}catch(e){this.$q.notifyError("Erro ao carregar os dados",e)}},async confirmar(){this.$utils.gconsole.log("ItemTrocarCest","confirmar",this.itens);for(const e in this.itens)!!this.itens[e].cest&&this.itens[e].cest!==this.itensOriginal[e].cest&&$db.item.gravaItem({atual:this.itens[e],original:this.itensOriginal[e]});this.modal.visivel=!1,this.$emit("confirmar")}},props:{modal:{required:!0,type:Object}},watch:{"modal.visivel"(e){e&&this.atualizar()}},mounted(){this.atualizar()}},Ie={class:"bg-white q-mx-md q-pa-md"};function De(e,a,t,i,o,r){const c=x("campo"),u=x("SeletorCest");return f(),_(Z,{modelValue:t.modal.visivel,"onUpdate:modelValue":a[1]||(a[1]=n=>t.modal.visivel=n),maximized:""},{default:m(()=>[l(L,null,{default:m(()=>[l(G,{class:"bg-primary text-white"},{default:m(()=>[z(l(w,{flat:"",round:"",dense:"",icon:"arrow_back"},null,512),[[K]]),l(W,{class:"q-mx-sm"},{default:m(()=>[y("Selecionar CEST para os itens")]),_:1}),l(w,{class:"q-ml-sm no-shadow",color:"white","text-color":"primary",label:"Salvar",onClick:a[0]||(a[0]=n=>e.tryLoading(r.confirmar,{erro:"Ocorreu erro ao salvar CEST"}))})]),_:1}),l(Y,{class:"text-body1 q-mx-lg q-my-sm"},{default:m(()=>[d("div",Ie,[(f(!0),F(S,null,A(o.itens,n=>(f(),F("div",{key:n.id,class:"q-col-gutter-x-sm items-baseline row"},[l(c,{"model-value":n.descricao,rotulo:"Descri\xE7\xE3o",class:"col-12 col-md-6","apenas-leitura":""},null,8,["model-value"]),l(c,{"model-value":n.ncm,rotulo:"NCM",class:"col-12 col-md-3","apenas-leitura":""},null,8,["model-value"]),l(u,{modelValue:n.cest,"onUpdate:modelValue":p=>n.cest=p,class:"col-12 col-md-3",ncm:n.ncm},null,8,["modelValue","onUpdate:modelValue","ncm"])]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var xe=M(Se,[["render",De]]),H={tipo:"NFCe",serie:"nfce.padrao.serie",homologacao:"nfce.homologacao",usadesconto:"nfce.usadesconto",gerarAutorizacaoDownload:de,gerarConfiguracaoImposto:fe,gerarNumeroNFe:Ce,obterConfiguracaoImpostoV2:he,obterObservacoesFigurasFiscais:ge,obterValoresAproximadosTributos:Ne,obterFatura:ve,obterFormasPagamento:Fe,obterFrete:be,obterItens:we,async gerarJson(e,a,t){const i=re("gerarJsonNFCe",e,a,t);try{s(!e,"Fatura n\xE3o fornecida");const o=j.iniciarCampos({idDocumento:e,cpfCnpjCliente:a,nomeCliente:t,totalDesconto:0,totalDevolucao:0,totalProdutos:0,totalServicos:0,alertas:[],erros:[],cache:{},outrosNFe:{},infNFe:R.executa(V.infNFe,{},"NFCe")},"gerarNFCeFatura");h.log("gerarJsonNFCeD","iniciarCampos",o),await this.acertoInicial(o),await this.obterFatura(o),await this.obterEmitente(o),await this.obterDestinatario(o,a,t);const r=[];if(await this.obterItens(o,r),r.length)throw $utils.emitter.emit("confrontarFigurasFiscais",r),new Error("Figura fiscal n\xE3o encontrada");return await this.obterFormasPagamento(o),await this.obterFrete(o),await this.gerarNumeroNFe(o.infNFe,o.outrosNFe.idContatoEmitente),await this.gerarAutorizacaoDownload(o.infNFe,o.outrosNFe.idContatoEmitente),Ee.calculaTotais(o.infNFe,o.outrosNFe,V),this.obterObservacoesNFe(o),this.obterValoresAproximadosTributos(o),this.obterObservacoesFigurasFiscais(o),await j.acertarDadosNFe(o.infNFe,o.outrosNFe,"NFCe"),o.infNFe=$.executa(V.infNFe,o.infNFe),o.erros=$.erros,h.log("gerarJsonNFCeD","infNFe",o.infNFe),h.log("gerarJsonNFCeD","compactarValidarNFe.erros",$.erros),o}finally{ne(i,1)}},async acertoInicial(e){var o;h.log("gerarJsonNFeD","acertoInicial"),e.infNFe.ide.tpNF="1",e.infNFe.ide.finNFe="1",e.infNFe.ide.tpAmb=await D.configuracoes.leValorNumerico(this.homologacao)===1?"2":"1",e.infNFe.ide.mod="65",e.infNFe.ide.tpImp="4",e.infNFe.ide.dhEmi=j.formatarDataNFe(new Date),s(!e.idDocumento,"Ops! N\xE3o foi encontrado o c\xF3digo do documento (venda/fatura).");const a=await $db.hibrido.le({table:"documento",id:e.idDocumento});let t=[];a.tipo==="Venda"&&t.push(a),a.tipo==="Fatura"&&(t=await $db.hibrido.lista({table:"documento",where:{idFatura:e.idDocumento}}));let i;for(const r of t){const c=Number(r==null?void 0:r.codigoDocumentoOperacao);if(Number.isInteger(c)&&c>0){const u=await $db.hibrido.lista({table:"documentoOperacao",where:{codigoDocumentoOperacao:c}});i||(i=u[0]),s((i==null?void 0:i.finalidade)!==((o=u[0])==null?void 0:o.finalidade),"Vendas possuem opera\xE7\xF5es com finalidades diferentes.")}}e.idCfopVenda=i==null?void 0:i.idCfop,s(!e.idCfopVenda,"Erro na configura\xE7\xE3o do sistema. Sem defini\xE7\xE3o do CFOP de venda.")},async gerarJsonCancelamento(e){const a={infEvento:{cOrgao:e.infNFe.ide.cUF,tpAmb:e.infNFe.ide.tpAmb,escolhas:{valor_escolha:e.infNFe.emit.escolhas.valor_escolha,CNPJ:e.infNFe.emit.escolhas.CNPJ,CPF:e.infNFe.emit.escolhas.CPF},chNFe:e.outrosNFe.chNFe,dhEvento:j.formatarDataNFe(new Date),nSeqEvento:"1",detEvento:{nProt:e.outrosNFe.nProt_emissao,xJust:"Nota cancelada devido divergencia de informacoes"}}};return a.infEvento=R.executa(V.infEvento,a.infEvento,"NFCe"),a.infEvento=$.executa(V.infEvento,a.infEvento),e.erros=$.erros,h.log("gerarJsonNFCeD","infNFe",e.infNFe),h.log("gerarJsonNFCeD","compactarValidarNFe.erros",$.erros),a.infEvento},obterObservacoesNFe(e){if(e.outrosNFe.dadosAdicionaisEmitente="",e.empresa.observacaoNFE){let a=g(e.empresa.observacaoNFE);a=`[${a}]`,e.outrosNFe.dadosAdicionaisEmitente+=a}},async obterConfiguracaoImposto(e){h.log("gerarJsonNFCeD","obterConfiguracaoImposto");const a=`Produto '${e.documentoItem.descricaoItem||""}'`;s(!e.item.ncm,`${a} sem cadastro de NCM`);const t=await N()._ncm.where("ncm").equals(e.item.ncm).first();s(!t,`${a} com NCM '${e.item.ncm||""}' inv\xE1lido`),e.documentoItem.idCfop||(e.documentoItem.idCfop=e.idCfopVenda);const i=await N().cfop.get(e.documentoItem.idCfop);s(!i,`${a} com CFOP inv\xE1lido`),h.log("gerarJsonNFCeD",`dadosNcm.id: ${t.id} dadosCfop.id: ${i.id} dados.empresa.id: ${e.empresa.id}`);const o=await N().impostoConfiguracao.where("idNcm").equals(t.id).filter(n=>n.idCfop===i.id&&n.idEmitente===e.empresa.id&&n.ufOrigem===e.empresa.enderecoPrincipal.uf&&n.ufDestino===e.empresa.enderecoPrincipal.uf).first();h.log("gerarJsonNFCeD","impostoConfiguracao",o);const r=`Verifique a configura\xE7\xE3o do imposto para NCM: ${e.item.ncm||""}, CFOP: ${i.cfop||""}, CNPJ: ${e.empresa.numeroDocumentoNacional||""}, UF origem: ${e.empresa.enderecoPrincipal.uf||""}, UF destino: ${e.empresa.enderecoPrincipal.uf||""}.`;s(!o,`${a} sem configura\xE7\xE3o de imposto. ${r}`);const c=e.det.prod,u=e.det.imposto;try{if(c.CFOP=(i.cfop||0).toString(),u.noXml_orig=await this.obterImpostoParametro(e,o.idOrigem),u.noXml_CST=u.noXml_CSOSN=await this.obterImpostoParametro(e,o.idCst),u.noXml_pICMS=o.aliqIcmsUFOrigem||o.aliqIcms||0,u.noXml_pRedBC=o.percRedBcIcms||0,u.noXml_pFCP=o.aliqFcp||0,u.noXml_CSTPis=await this.obterImpostoParametro(e,o.idTipoTribPis),u.noXml_pPIS=o.aliqPis||0,u.noXml_CSTCofins=await this.obterImpostoParametro(e,o.idTipoTribCofins),u.noXml_pCOFINS=o.aliqCofins||0,o.idCest){const n=await this.obterImpostoParametro(e,o.idCest);n&&(c.opcional.visivel=!0,c.opcional.CEST=E(n))}}catch(n){console.error(n),s(!0,`${a} com erro na configura\xE7\xE3o de imposto. ${r}`)}},async obterDestinatario(e,a,t){var c;if(e.destinatario={},!a){e.infNFe.dest.visivel=!1;return}const i=e.documentoFatura.idContato;i&&(e.destinatario=await N().contato.get(i),e.destinatario&&(e.destinatario.enderecos=await N().contatoEndereco.where("idContato").equals(i).toArray(),e.destinatario.enderecoPrincipal=e.destinatario.enderecos.find(u=>u.grupo==="Principal"),e.destinatario.enderecoPrincipal||(e.destinatario.enderecoPrincipal=e.destinatario.enderecos[0]||{}),e.destinatario.telefones=await N().contatoTelefone.where("idContato").equals(i).toArray(),e.destinatario.telefonePrincipal=e.destinatario.telefones.find(u=>u.grupo==="Principal"),e.destinatario.telefonePrincipal||(e.destinatario.telefonePrincipal=e.destinatario.telefones[0]||{}),h.log("gerarJsonNFCeD","dados.destinatario",e.destinatario)));const o=e.infNFe.dest;o.visivel=!0;const r=E(a);r.length===11?(o.escolhas.valor_escolha="CPF",o.escolhas.CPF=r,o.indIEDest="9"):r.length===14?(o.escolhas.valor_escolha="CNPJ",o.escolhas.CNPJ=r,o.indIEDest="9"):s(!0,"Destinatario com CPF/CNPJ inv\xE1lido"),r===E(e.destinatario.numeroDocumentoNacional)&&(o.escolhas.valor_escolha==="CNPJ"&&!!e.destinatario.numeroDocumentoEstadual&&(o.IE=E(e.destinatario.numeroDocumentoEstadual)),o.xNome=g(t||e.destinatario.nome),!(!e.destinatario.enderecoPrincipal.uf||!e.destinatario.enderecoPrincipal.ibgeCod)&&(o.enderDest.visivel=!0,o.email=(e.destinatario.emailNfe||e.destinatario.email||"").trim(),o.enderDest.fone=E(e.destinatario.telefonePrincipal.telefone||""),o.enderDest.xLgr=g(e.destinatario.enderecoPrincipal.logradouro),o.enderDest.nro=(e.destinatario.enderecoPrincipal.numero||"SN").trim(),o.enderDest.xCpl=g(e.destinatario.enderecoPrincipal.complemento),o.enderDest.xBairro=g(e.destinatario.enderecoPrincipal.bairro),o.enderDest.cMun=String(e.destinatario.enderecoPrincipal.ibgeCod||"").trim(),o.enderDest.xMun=g(e.destinatario.enderecoPrincipal.municipio),o.enderDest.UF=(e.destinatario.enderecoPrincipal.uf||"").trim(),o.enderDest.CEP=E(e.destinatario.enderecoPrincipal.cep||""),o.enderDest.cPais=String((c=e.destinatario.enderecoPrincipal.codigoPais)!=null?c:"")||"1058",o.enderDest.xPais=(e.destinatario.enderecoPrincipal.pais||"").trim()||"Brasil"))},async obterEmitente(e){var i;h.log("gerarJsonNFCeD","obterEmitente");const a=e.documentoFatura.idEmpresa;if(s(!a,"Fatura sem empresa emitente"),e.empresa=await N().contato.get(a),s(!e.empresa,"N\xE3o foi poss\xEDvel carregar a empresa emitente"),e.outrosNFe.idContatoEmitente=a,e.empresaPlat=await X.empresa.where({idContato:a}).first(),!e.empresaPlat){const o=JSON.parse(localStorage.getItem("clienteSistema"));e.empresaPlat=await X.empresa.where({codigoContato:e.empresa.codigoContato}).filter(r=>r.codigoClienteSistema===o.codigoClienteSistema).first()}s(!e.empresaPlat,"N\xE3o foi poss\xEDvel carregar a empresa emitente"),e.infNFe.ide.tpAmb==="1"?(s(!e.empresaPlat.hashCSCProducao,"Empresa emitente sem hashCSC de produ\xE7\xE3o cadastrado"),s(!e.empresaPlat.tokenCSCProducao,"Empresa emitente sem tokenCSC de produ\xE7\xE3o cadastrado"),e.empresaPlat.hashCSC=e.empresaPlat.hashCSCProducao,e.empresaPlat.tokenCSC=e.empresaPlat.tokenCSCProducao):(s(!e.empresaPlat.hashCSCHomologacao,"Empresa emitente sem hashCSC de homologa\xE7\xE3o cadastrado"),s(!e.empresaPlat.tokenCSCHomologacao,"Empresa emitente sem tokenCSC de homologa\xE7\xE3o cadastrado"),e.empresaPlat.hashCSC=e.empresaPlat.hashCSCHomologacao,e.empresaPlat.tokenCSC=e.empresaPlat.tokenCSCHomologacao),e.empresa.enderecos=await N().contatoEndereco.where("idContato").equals(a).toArray(),s(!e.empresa.enderecos||e.empresa.enderecos.length===0,"N\xE3o foi poss\xEDvel carregar o endere\xE7o da empresa emitente"),e.empresa.enderecoPrincipal=e.empresa.enderecos.find(o=>o.grupo==="Principal"),e.empresa.enderecoPrincipal||(e.empresa.enderecoPrincipal=e.empresa.enderecos[0]||{}),e.empresa.telefones=await N().contatoTelefone.where("idContato").equals(a).toArray()||[],e.empresa.telefonePrincipal=e.empresa.telefones.find(o=>o.grupo==="Principal"),e.empresa.telefonePrincipal||(e.empresa.telefonePrincipal=e.empresa.telefones[0]||{}),h.log("gerarJsonNFCeD","dados.empresa",e.empresa),s(!e.empresa.numeroDocumentoNacional,"Empresa emitente sem CNPJ cadastrado"),s(!e.empresa.numeroDocumentoEstadual,"Empresa emitente sem Inscri\xE7\xE3o Estadual cadastrado"),s(!e.empresa.nome,"Empresa emitente sem Raz\xE3o Social (nome) cadastrado"),s(!e.empresa.enderecoPrincipal.uf,"Empresa emitente sem UF cadastrado"),s(!e.empresa.enderecoPrincipal.ibgeCod,"Empresa emitente sem c\xF3digo do munic\xEDpio cadastrado"),s(!e.empresa.regime,"Empresa emitente sem regime cadastrado");const t=e.infNFe.emit;t.escolhas.CNPJ=E(e.empresa.numeroDocumentoNacional),t.IE=E(e.empresa.numeroDocumentoEstadual),t.CRT=e.empresa.regime==="SimplesNacional"?"1":e.empresa.regime==="MEI"?"4":"3",t.xNome=g(e.empresa.nome),t.xFant=g(e.empresa.apelido),t.email=(e.empresa.email||"").trim(),t.enderEmit.fone=E(e.empresa.telefonePrincipal.telefone),t.enderEmit.xLgr=g(e.empresa.enderecoPrincipal.logradouro),t.enderEmit.nro=(e.empresa.enderecoPrincipal.numero||"SN").trim(),t.enderEmit.xCpl=g(e.empresa.enderecoPrincipal.complemento),t.enderEmit.xBairro=g(e.empresa.enderecoPrincipal.bairro),t.enderEmit.cMun=String(e.empresa.enderecoPrincipal.ibgeCod||"").trim(),t.enderEmit.xMun=g(e.empresa.enderecoPrincipal.municipio),t.enderEmit.UF=(e.empresa.enderecoPrincipal.uf||"").trim(),t.enderEmit.CEP=E(e.empresa.enderecoPrincipal.cep),t.enderEmit.cPais=String((i=e.empresa.enderecoPrincipal.codigoPais)!=null?i:"")||"1058",t.enderEmit.xPais=g(e.empresa.enderecoPrincipal.pais||"Brasil"),e.infNFe.ide.cMunFG=t.enderEmit.cMun,e.infNFe.ide.cUF=String(se[t.enderEmit.UF])},async obterImpostoParametro(e,a){s(!a,"Configura\xE7\xE3o de imposto sem informa\xE7\xE3o completa");let t=e.cache[a];if(!t){const i=await N().impostoParametro.get(a);t=i?i.numero.trim():void 0,e.cache[a]=t}return s(!t,"Configura\xE7\xE3o de imposto inv\xE1lida"),t},async obterMeioPagamento(e,a){h.log("gerarJsonNFCeD","obterMeioPagamento",a),s(!a,"Forma de pagamento inv\xE1lida");let t=e.cache[a];if(t)return t;const i=await N().formaPagamento.get(a);s(!i||!i.descricao,"N\xE3o foi poss\xEDvel carregar a forma de pagamento");const o=i.descricao.toLowerCase();return t=o.includes("dinheiro")?"01":o.includes("d\xE9bito")?"04":o.includes("cr\xE9dito de clientes")?"01":o.includes("cr\xE9dito")?"03":o.includes("cart\xE3o")&&Number(i.parcelamentoMaximo||0)===1?"04":o.includes("cart\xE3o")&&Number(i.parcelamentoMaximo||0)>1?"03":"99",e.cache[a]=t,console.log("codigoMeioPagamento: ",t),t},async obterAliquotasTributosIbpt(e,a){h.log("gerarJsonNFCeD","obterValorAproxTributos",a);const t=await N().nfeIbpt.where("codigo").equals(Number(a.prod.NCM)).toArray();if(this.verificarAlerta(!t||t.length===0,`N\xE3o encontrado al\xEDquotas para calculo do valor aproximado de tributos do NCM: ${a.prod.NCM}. Atualize sua tabela IBPT.`,e))return;const i=t.filter(c=>c.idContato===e.empresa.id),r=(i.length?i:t).reduce((c,u)=>!c||c.vigenciaFim<u.vigenciaFim?u:c,null);this.verificarAlerta(r.vigenciaFim<le(),`Informa\xE7\xF5es vencidas para para o calculo do valor aproximado de tributos do NCM: ${a.prod.NCM}. Atualize sua tabela IBPT.`,e),a.imposto.noXml_pTribImp=Number(r.importadosFederal||0),a.imposto.noXml_pTribFed=Number(r.nacionalFederal||0),a.imposto.noXml_pTribEst=Number(r.estadual||0),a.imposto.noXml_pTribMun=Number(r.municipal||0)},verificarAlerta(e,a,t){return e&&(t.alertas||(t.alertas=[]),t.alertas.push(a),console.warn(a)),e}};const Te={components:{CpfCnpjNoCupom:ye,ItemTrocarCest:xe},computed:{config(){return D.configuracoes.valores}},data(){return{configImpressaoNFe:[],documentosSat:[],documentosFiscais:[],documentosNFe:[],hwDest:"",modalItemTrocarCest:{visivel:!1,campos:{}},cpfCnpjNoCupom:{visivel:!1,incluirCpfCnpjNoCupom:!1,idEmpresa:"",cpfCnpj:"",nomeCliente:""}}},methods:{abrirNFe(e){$utils.emitter.emit("abrirNFe",e)},async atualiza(){const e=this.idFatura||this.idVenda;if(e){const t=await $db.hibrido.lista({table:"documentoFiscalEletronico",where:{idDocumento:e}});this.documentosFiscais=t.sort((i,o)=>Number(o.nNF)-Number(i.nNF)),this.documentosSat=await $db.documentoSat.lista(e)}const a=await $db.hibrido.le({table:"documento",id:e});await this.configuraImpressao(a.idEmpresa),this.hwDest=await k.hwDest(a.idEmpresa)},async cancelarSat(e){try{await new Promise((t,i)=>{$q.dialog({title:"Tem certeza?",message:"Ao continuar voc\xEA ir\xE1 cancelar este cupom",cancel:{label:"CANCELAR",push:!0,color:"tertiary",flat:!0},ok:{label:"CONFIRMAR",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(()=>{t()}).onCancel(()=>{i()})})}catch{return}let a="Erro no cupom";try{v.show({spinner:T,spinnerColor:"amber",message:"Cancelando o cupom"});const t=this.documentosSat.find(c=>c.id===e),i={NumeroPDV:1,ChaveAcessoCFe:t.chaveCupom,CPF_CNPJ:"",Total:t.valorTotal};a="Ocorreu um erro ao cancelar o cupom";const o=await $db.hibrido.le({table:"documento",id:t.idDocumento}),r=await P.cancelarSat(JSON.stringify(i),o);s(r.status==="Erro",r.mensagem),this.$q.notifyPositive(r.mensagem),a="Ocorreu um erro ao gravar os dados do cancelamento do cupom",await k.salvarRetornoCancelamento(this.idFatura,r.chaveCFe,r.xml),(r==null?void 0:r.versaoIntegrador)==="V2"&&await P.imprimirCancelamentoSat(r.xml,t.idEmpresa)}catch(t){this.$q.notifyError(a,t)}finally{v.hide(),this.atualiza()}},async cancelarNFCe(e){try{await new Promise((t,i)=>{this.$q.dialog({title:"Tem certeza?",message:"Ao continuar voc\xEA ir\xE1 cancelar este cupom",cancel:{label:"CANCELAR",push:!0,color:"tertiary",flat:!0},ok:{label:"CONFIRMAR",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(()=>{t()}).onCancel(()=>{i()})})}catch{return}let a="Erro no NFCe";try{v.show({spinner:T,spinnerColor:"amber",message:"Selecionando Certificado e Cancelando NFCe"});const t=JSON.parse(this.documentosFiscais.find(o=>o.id===e).json);if(t.infEvento=await H.gerarJsonCancelamento(t),s(!t.infEvento,a),t.erros.length){$g.modalAlerta.show({titulo:"Erro de valida\xE7\xE3o",erros:t.erros});return}a="Ocorreu um erro ao cancelar o NFCe";const i=await P.cancelarNFCe(t);if(i.status==="Erro"){const o=[...(i.mensagem||"").split(`
`),...(i.complemento||"").split(`
`)];$g.modalAlerta.show({titulo:i.status,erros:o});return}this.$q.notifyPositive(i.mensagem)}catch(t){this.$q.notifyError(a,t)}finally{v.hide(),this.atualiza()}},async configuraImpressao(e){const a=await D.configuracoes.porNome("impressao.nfe",e);this.configImpressaoNFe=a.length?a.map(t=>({texto:"Imprimir DANFE",...t})):[{valor:"nfe-danfe",texto:"DANFE"},{valor:"nfe-danfe-simplificado",texto:"DANFE Simplificado"},{valor:"duplicata-mercantil",texto:"Duplicata Mercantil"}]},async emitirCupom(e,a){try{const t=await $db.hibrido.le({table:"documento",id:e});s(!t||!t.status,"Erro ao emitir cupom. Falha na consulta da fatura."),s(t.status!=="Finalizada","Cupom n\xE3o emitido. A Fatura n\xE3o foi finalizada.");const i=(await D.financeiroTitulo.le({documentoId:e}))[0];if(!i)return;let o;if(i.idDocumentoCaixa){const r=await $db.hibrido.le({table:"documento",id:i.idDocumentoCaixa});s(!r||!r.idCaixa,"Erro ao emitir cupom. Falha na consulta do documento Caixa.");const c=await D.caixa.le({id:r.idCaixa});s(!c||!c.tipo,"Erro ao emitir cupom. Falha na consulta do Caixa."),o=c.tipo}else{const r=await D.configuracoes.porNome("vendas.tipoPDV",t.idEmpresa);o=parseInt(((r||[]).find(c=>c.valor)||{}).valor)||4}if(o=D.caixa.tiposCaixa[o],s(!["SAT","NFCe"].includes(o),`Cupom n\xE3o emitido. Caixa configurado para ${o}.`),o==="SAT"){let r;try{r=(await $utils.geeksApi({listaHibrido:{funcao:"FCC75497-9CAD-4D28-AB39-F669142BE8A9",table:"documentoSat",where:{idDocumento:e}}})).data.listaHibrido}catch{s(!0,"Erro ao emitir cupom. Falha na consulta dos documentos.")}for(const p of await $erp().documentoSat.where({idDocumento:e}).toArray())r.some(b=>b.id===p.id)||r.push(p);const c=r.filter(p=>p.cancelamento).map(p=>p.chaveCupomCancelado),n=r.filter(p=>!c.includes(p.chaveCupom)).filter(p=>!p.cancelamento);s(n.length>0,"Cupom j\xE1 emitido para a fatura")}else if(o==="NFCe"){const r=await $db.hibrido.lista({table:"documentoFiscalEletronico",where:{idDocumento:e,situacao:"Emitido"}});s(!r,"Erro ao emitir cupom. Falha na consulta dos dados."),s(r.length>0,"Cupom j\xE1 emitido para a fatura")}await ce(e),a&&(this.cpfCnpjNoCupom={visivel:!1,incluirCpfCnpjNoCupom:!1,idEmpresa:t.idEmpresa,cpfCnpj:t.numeroDocumentoContato,nomeCliente:t.descricaoContato,idFatura:e,tipoCaixa:o,concluir:null},await this.emitirCupomConfirma(this.cpfCnpjNoCupom)),a||(this.cpfCnpjNoCupom={visivel:!0,incluirCpfCnpjNoCupom:!1,idEmpresa:t.idEmpresa,cpfCnpj:t.numeroDocumentoContato,nomeCliente:t.descricaoContato,idFatura:e,tipoCaixa:o,concluir:null},await new Promise((r,c)=>{this.cpfCnpjNoCupom.concluir=r}),await this.$utils.dormir(500),this.modalItemTrocarCest.visivel&&await new Promise((r,c)=>{this.concluirItemTrocarCest=r}))}catch(t){this.$q.notifyError("Erro ao emitir cupom",t)}},async emitirCupomConfirma(e){return{SAT:this.emitirCupomSatConfirma,NFCe:this.emitirCupomNFCeConfirma}[e.tipoCaixa](e)},async emitirCupomSatConfirma(e){var t,i;let a="Erro desconhecido";try{v.show({spinner:T,spinnerColor:"amber",message:"Emitindo cupom"}),e.incluirCpfCnpjNoCupom||(e.idEmpresa="",e.cpfCnpj="",e.nomeCliente=""),a="Ocorreu um erro ao gerar o cupom";const{objetoJson:o,dados:r}=await k.gerar(e.idFatura,1,e.cpfCnpj,e.nomeCliente);s(!o,a);for(const n of r.alertas)this.$q.notify({message:n,textColor:"black",type:"warning"});a="Ocorreu um erro ao emitir o cupom";const c=[(t=r==null?void 0:r.documentoFatura)!=null?t:{},...(i=r==null?void 0:r.documentosVendas)!=null?i:[]].find(n=>n.id===r.idDocumento),u=await P.emitirSat(JSON.stringify(o),c);s(u.status==="Erro",u.mensagem),this.$q.notifyPositive(u.mensagem),a="Ocorreu um erro ao gravar os dados do cupom",await k.salvarRetornoEmissao(r,u.chaveCFe,u.xml),(u==null?void 0:u.versaoIntegrador)==="V2"&&await P.imprimirSat(u.xml,r.empresa.id)}catch(o){this.$q.notifyError(a,o)}finally{!this.modalItemTrocarCest.visivel&&this.concluirItemTrocarCest&&(this.concluirItemTrocarCest(),this.concluirItemTrocarCest=null),await this.atualiza(),v.hide()}},async emitirCupomNFCeConfirma(e){let a="Erro ao emitir Cupom NFCe",t,i;try{if(v.show({spinner:T,spinnerColor:"amber",message:"Selecionando Certificado e Emitindo o Cupom NFCe"}),e.incluirCpfCnpjNoCupom||(e.idEmpresa="",e.cpfCnpj="",e.nomeCliente=""),a="Ocorreu um erro ao gerar o Cupom NFCe",i=await H.gerarJson(e.idFatura,e.cpfCnpj,e.nomeCliente),s(!i,a),i.erros.length){$g.modalAlerta.show({titulo:"Erro de valida\xE7\xE3o",erros:i.erros});return}if(await this.verificarCestEmST(i))return;for(const o of i.alertas)this.$q.notify({message:o,textColor:"black",type:"warning"});if(a="Ocorreu um erro ao emitir o Cupom NFCe",t=await P.emitirNFCe(i,i.empresaPlat.hashCSC,i.empresaPlat.tokenCSC),t.status==="Erro"){const o=[...(t.mensagem||"").split(`
`),...(t.complemento||"").split(`
`)];$g.modalAlerta.show({titulo:t.status,erros:o});return}this.$q.notifyPositive(t.mensagem)}catch(o){this.$q.notifyError(a,o);return}finally{v.hide(),!this.modalItemTrocarCest.visivel&&this.concluirItemTrocarCest&&(this.concluirItemTrocarCest(),this.concluirItemTrocarCest=null),this.atualiza()}try{const o=await P.imprimirNFCe(t.xml,i.outrosNFe.idContatoEmitente);o.status==="Erro"&&console.error(`Erro ao imprimir NFCe
`,o.mensagem)}catch(o){console.error(`Erro ao imprimir NFCe
`,o.toString())}},async reimprimirSat(e){try{v.show({spinner:T,spinnerColor:"amber",message:"Imprimindo cupom"});const a=this.documentosSat.find(i=>i.id===e),t=a.cancelamento?await P.imprimirCancelamentoSat(a.xml,a.idEmpresa):await P.imprimirSat(a.xml,a.idEmpresa);s(t.status==="Erro",t.mensagem),this.$q.notifyPositive(t.mensagem)}catch(a){this.$q.notifyError("Ocorreu um erro ao imprimir o cupom",a)}finally{v.hide()}},async reimprimirNFCe(e){try{v.show({spinner:T,spinnerColor:"amber",message:"Imprimindo NFCe"});const a=await $db.hibrido.lista({table:"documentoFiscalEletronicoXml",where:{idDocumentoFiscalEletronico:e,status:"Sucesso",situacao:"Emitido"}});s(!a||!a.length||!a[0].xmlProt,"Ocorreu um erro ao carregar o xml da NFCe");const t=JSON.parse(a[0].json),i=await P.imprimirNFCe(a[0].xmlProt,t.outrosNFe.idContatoEmitente);s(i.status==="Erro",i.mensagem),i.mensagem&&this.$q.notifyPositive(i.mensagem)}catch(a){this.$q.notifyError("Ocorreu um erro ao imprimir o NFCe",a)}finally{v.hide()}},async verificarCestEmST(e){if(await D.configuracoes.leValorNumerico("imposto.versao")!==2)return!1;const t=[];for(const i of e.infNFe.det){const o=$lodash.get(i,"prod.noXml_id"),r=$lodash.get(i,"prod.opcional.CEST"),c=$lodash.get(i,"imposto.noXml_CSOSN")||$lodash.get(i,"imposto.noXml_CST");["10","20","60","70","201","202","500"].includes(c)&&!r&&t.push(o)}return t.length===0?!1:(this.modalItemTrocarCest={visivel:!0,campos:{ids:t}},!0)},verNoSefaz(e){window.open(e,"_blank")}},props:{idFatura:{required:!1,type:String},idVenda:{required:!1,type:String}},watch:{idFatura(){this.atualiza()},"cpfCnpjNoCupom.visivel"(e){!e&&this.cpfCnpjNoCupom.concluir&&(this.cpfCnpjNoCupom.concluir(),this.cpfCnpjNoCupom.concluir=null)},"modalItemTrocarCest.visivel"(e){!e&&this.concluirItemTrocarCest&&(this.concluirItemTrocarCest(),this.concluirItemTrocarCest=null)}},mounted(){$utils.emitter.on("atualizarDocumentosFiscais",this.atualiza),this.atualiza()},beforeUnmount(){$utils.emitter.off("atualizarDocumentosFiscais",this.atualiza)}},qe={class:""},$e={key:0,class:"q-item-label",style:{color:"#0c0c0c"}},Ve={class:"col-9 col-lg-10 q-pl-sm"},ke={class:"row"},Ae={class:"col-4 col-sm-1"},je={class:"col-4 col-sm-1"},Oe={class:"col-4 col-sm-3"},Je={class:"col-6 col-sm-4"},ze={class:"col-6 col-sm-3"},Me={class:"col-3 col-lg-2 text-right"},Ue={class:"col-10 q-pl-sm"},Xe={class:"row"},Be={class:"col-3 col-sm-1"},Qe={class:"col-3 col-sm-2"},Re={class:"col-6 col-sm-4"},He={class:"col-6 col-sm-2"},Le={class:"col-6 col-sm-3"},Ge={class:"col-2 text-right"},Ke={class:"col-9 col-lg-10 q-pl-sm"},We={class:"row"},Ye=d("div",{class:"col-4 col-sm-1"},"NFe",-1),Ze={class:"col-4 col-sm-1"},eo={class:"col-4 col-sm-3"},oo={class:"col-6 col-sm-4"},to={class:"col-6 col-sm-3"};function ao(e,a,t,i,o,r){const c=x("CpfCnpjNoCupom"),u=x("ItemTrocarCest");return f(),F("div",qe,[!!o.documentosSat.length||!!o.documentosFiscais.length||!!o.documentosNFe.length?(f(),F("p",$e,[l(B,{name:"account_balance",class:"q-mr-md",size:"24px",style:{color:"#737373"}}),y(" Documentos fiscais ")])):I("",!0),o.documentosSat.length?(f(),_(J,{key:1,highlight:"",class:"q-pa-none"},{default:m(()=>[(f(!0),F(S,null,A(o.documentosSat,n=>(f(),_(O,{class:"row u-separador q-my-none q-pa-xs",key:n.id},{default:m(()=>[d("div",Ve,[d("div",ke,[d("div",Ae,C(o.hwDest),1),d("div",je,C(n.numeroCupom),1),d("div",Oe,C(n.cancelamento?"Cancelado":"Emitido"),1),d("div",Je,C(e.$filters.numero(n.valorTotal,2)),1),d("div",ze,C(e.$filters.dataHora(n.dataHoraEmissao)),1)])]),d("div",Me,[l(w,{color:"primary",dense:"",flat:"",icon:"print",round:"",onClick:p=>r.reimprimirSat(n.id)},{default:m(()=>[l(q,null,{default:m(()=>[y("Reimprimir "+C(o.hwDest),1)]),_:1})]),_:2},1032,["onClick"]),n.cancelamento?I("",!0):(f(),_(w,{key:0,color:"primary",dense:"",flat:"",icon:"cancel",round:"",onClick:p=>r.cancelarSat(n.id)},{default:m(()=>[l(q,null,{default:m(()=>[y("Cancelar "+C(o.hwDest),1)]),_:1})]),_:2},1032,["onClick"]))])]),_:2},1024))),128))]),_:1})):I("",!0),o.documentosFiscais.length?(f(),_(J,{key:2,highlight:"",class:"q-pa-none"},{default:m(()=>[(f(!0),F(S,null,A(o.documentosFiscais,n=>(f(),_(O,{class:"row q-px-xs",key:n.id},{default:m(()=>[d("div",Ue,[d("div",Xe,[d("div",Be,C(n.tipo),1),d("div",Qe,C(n.nNF),1),d("div",Re,C(n.situacao)+" "+C(n.tpAmb==="2"?"em Homologa\xE7\xE3o":"")+" "+C(n.operacao?" - "+n.operacao:""),1),d("div",He,C(e.$filters.numero(n.vNF,2)),1),d("div",Le,C(e.$filters.dataHora(n.dataHoraEmissao)),1)])]),d("div",Ge,[n.tipo==="NFCe"?(f(),F(S,{key:0},[n.situacao==="Emitido"?(f(),F(S,{key:0},[l(w,{color:"primary",dense:"",flat:"",icon:"print",round:"",onClick:p=>r.reimprimirNFCe(n.id)},{default:m(()=>[l(q,null,{default:m(()=>[y("Reimprimir NFCe")]),_:1})]),_:2},1032,["onClick"]),l(w,{color:"primary",dense:"",flat:"",icon:"cancel",round:"",onClick:p=>r.cancelarNFCe(n.id)},{default:m(()=>[l(q,null,{default:m(()=>[y("Cancelar NFCe")]),_:1})]),_:2},1032,["onClick"])],64)):I("",!0),l(w,{color:"primary",dense:"",flat:"",icon:"open_in_browser",round:"",onClick:p=>r.verNoSefaz(n.qrCode)},{default:m(()=>[l(q,null,{default:m(()=>[y("Ver no Sefaz")]),_:1})]),_:2},1032,["onClick"])],64)):n.tipo==="NFe"?(f(),F(S,{key:1},[l(w,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-ma-xs",size:"md",style:{float:"right"}},{default:m(()=>[l(me,null,{default:m(()=>[l(J,{link:"",separator:""},{default:m(()=>[(f(!0),F(S,null,A(o.configImpressaoNFe,p=>(f(),_(O,{clickable:"",key:p.valor,onClick:b=>e.$imprimir(p.valor,n.id)},{default:m(()=>[l(Q,{avatar:""},{default:m(()=>[l(B,{name:"mdi-printer"})]),_:1}),l(Q,null,{default:m(()=>[l(ue,null,{default:m(()=>[y(C(p.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024),l(w,{color:"primary",dense:"",flat:"",icon:"edit",round:"",onClick:p=>r.abrirNFe(n.id)},{default:m(()=>[l(q,null,{default:m(()=>[y("Abrir")]),_:1})]),_:2},1032,["onClick"])],64)):I("",!0)])]),_:2},1024))),128))]),_:1})):I("",!0),o.documentosNFe.length?(f(),_(J,{key:3,highlight:"",class:"q-pa-none"},{default:m(()=>[(f(!0),F(S,null,A(o.documentosNFe,(n,p)=>(f(),_(O,{class:"row u-separador q-my-none q-pa-xs",key:p},{default:m(()=>[d("div",Ke,[d("div",We,[Ye,d("div",Ze,C(n.noNota),1),d("div",eo,C(n.nfeCanceladaEvento?"Cancelado":"Emitido"),1),d("div",oo,C(e.$filters.numero(n.valTotNota,2)),1),d("div",to,C(e.$filters.dataHora(n.horaSaidaEntrada)),1)])])]),_:2},1024))),128))]),_:1})):I("",!0),l(c,{modelValue:o.cpfCnpjNoCupom.visivel,"onUpdate:modelValue":a[0]||(a[0]=n=>o.cpfCnpjNoCupom.visivel=n),dados:o.cpfCnpjNoCupom,onConfirmar:r.emitirCupomConfirma},null,8,["modelValue","dados","onConfirmar"]),l(u,{modal:o.modalItemTrocarCest,onConfirmar:a[1]||(a[1]=n=>r.emitirCupomConfirma(o.cpfCnpjNoCupom))},null,8,["modal"])])}var lo=M(Te,[["render",ao]]);export{ye as C,lo as D};