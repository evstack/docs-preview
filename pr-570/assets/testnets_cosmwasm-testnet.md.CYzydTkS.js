import{_ as u,V as h,o as i,c as n,j as l,a3 as p,a,G as d}from"./chunks/framework.BZyQX7AL.js";const c="/docs-preview/pr-570/assets/faucet.BrSlg9f5.png",q="/docs-preview/pr-570/assets/keplr.eOsQCwa1.png",k={name:"app",methods:{async addNetwork(){try{const t=await h(()=>import("./chunks/rosm.sMFJ_kYE.js"),[]);console.log("got back settings",t);try{await window.keplr.enable(t.chainId),alert(t.chainId+" already added")}catch{console.log("Unable to connect to wallet natively, so trying experimental chain");try{await window.keplr.experimentalSuggestChain(t),await window.keplr.enable(t.chainId)}catch(s){console.log("and yet there is a problem in trying to do that too",s)}}}catch(t){if(t instanceof SyntaxError)alert("There was a syntax error. Please correct it and try again: "+t.message);else throw t}}}};function m(t,o,s,C,F,e){return i(),n("button",{onClick:o[0]||(o[0]=(...r)=>e.addNetwork&&e.addNetwork(...r))},o[1]||(o[1]=[l("img",{src:q,alt:"",width:"20",height:"20"},null,-1)]))}const E=u(k,[["render",m]]),y=JSON.parse('{"title":"CosmWasm Testnet","description":"This page provides details about Rollkit testnets.","frontmatter":{"description":"This page provides details about Rollkit testnets.","head":[["meta",{"name":"og:title","content":"CosmWasm Testnet | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"testnets/cosmwasm-testnet.md","filePath":"testnets/cosmwasm-testnet.md","lastUpdated":1748003302000}'),g={name:"testnets/cosmwasm-testnet.md"},A=Object.assign(g,{setup(t){return(o,s)=>(i(),n("div",null,[s[2]||(s[2]=p(`<h1 id="cosmwasm-testnet" tabindex="-1">CosmWasm Testnet <a class="header-anchor" href="#cosmwasm-testnet" aria-label="Permalink to &quot;CosmWasm Testnet&quot;">​</a></h1><p>Our CosmWasm testnet is deployed by following the <a href="/docs-preview/pr-570/tutorials/cosmwasm">cosmwasm tutorial</a>. The <a href="https://github.com/rollkit/wasmd/tree/v0.50.0" target="_blank" rel="noreferrer">rollkit/wasmd</a> contains the code for the same.</p><h2 id="details-of-rosm-testnet" tabindex="-1">Details of ROSM testnet <a class="header-anchor" href="#details-of-rosm-testnet" aria-label="Permalink to &quot;Details of ROSM testnet&quot;">​</a></h2><ul><li><p>Chain ID: <code>rosm</code></p></li><li><p>Address Prefix: <code>wasm</code></p><ul><li>e.g., <code>wasm1lysztpn74kl40w6ghfhy7xr0v44r658szuysl5</code></li></ul></li><li><p>Rollkit version: <code>v0.13.1</code></p></li><li><p>RPC: <code>https://rpc.rosm.rollkit.dev/</code></p><ul><li><p>Example: <code>https://rpc.rosm.rollkit.dev/block?height=1</code></p><pre><code>\`\`\`json
{
    &quot;jsonrpc&quot;: &quot;2.0&quot;,
    &quot;result&quot;: {
        &quot;block_id&quot;: {
        &quot;hash&quot;: &quot;9D5C710CD64D031752A7DB86E09C8EA8CE4CAE4E30878C6D0487C57806060A47&quot;,
        &quot;parts&quot;: {
            &quot;total&quot;: 0,
            &quot;hash&quot;: &quot;&quot;
        }
        },
        &quot;block&quot;: {
        &quot;header&quot;: {
            &quot;version&quot;: {
            &quot;block&quot;: &quot;11&quot;
            },
            &quot;chain_id&quot;: &quot;rosm&quot;,
            &quot;height&quot;: &quot;1&quot;,
            &quot;time&quot;: &quot;2024-04-09T15:48:50.464427035Z&quot;,
            &quot;last_block_id&quot;: {
            &quot;hash&quot;: &quot;&quot;,
            &quot;parts&quot;: {
                &quot;total&quot;: 0,
                &quot;hash&quot;: &quot;&quot;
            }
            },
            &quot;last_commit_hash&quot;: &quot;E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855&quot;,
            &quot;data_hash&quot;: &quot;6E340B9CFFB37A989CA544E6BB780A2C78901D3FB33738768511A30617AFA01D&quot;,
            &quot;validators_hash&quot;: &quot;036DA1AB230A4CE8654358F77CB426BA2F8EF9B81EA06FACA32085B0B0D25C2A&quot;,
            &quot;next_validators_hash&quot;: &quot;036DA1AB230A4CE8654358F77CB426BA2F8EF9B81EA06FACA32085B0B0D25C2A&quot;,
            &quot;consensus_hash&quot;: &quot;0000000000000000000000000000000000000000000000000000000000000000&quot;,
            &quot;app_hash&quot;: &quot;E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855&quot;,
            &quot;last_results_hash&quot;: &quot;E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855&quot;,
            &quot;evidence_hash&quot;: &quot;E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855&quot;,
            &quot;proposer_address&quot;: &quot;D7D4C5A2AC271061512789BEE3718305BEAA519B&quot;
        },
        &quot;data&quot;: {
            &quot;txs&quot;: []
        },
        &quot;evidence&quot;: {
            &quot;evidence&quot;: null
        },
        &quot;last_commit&quot;: {
            &quot;height&quot;: &quot;1&quot;,
            &quot;round&quot;: 0,
            &quot;block_id&quot;: {
            &quot;hash&quot;: &quot;9D5C710CD64D031752A7DB86E09C8EA8CE4CAE4E30878C6D0487C57806060A47&quot;,
            &quot;parts&quot;: {
                &quot;total&quot;: 0,
                &quot;hash&quot;: &quot;&quot;
            }
            },
            &quot;signatures&quot;: [
            {
                &quot;block_id_flag&quot;: 2,
                &quot;validator_address&quot;: &quot;D7D4C5A2AC271061512789BEE3718305BEAA519B&quot;,
                &quot;timestamp&quot;: &quot;2024-04-09T15:48:50.464427035Z&quot;,
                &quot;signature&quot;: &quot;FWSRXEOvry/FC0KERmqyLP8voIVw8QFywgELDfLBAuFcMpm7TB7pTLb4OPwzjAoSt6Hbo/uIIny/pRhw8RoHDQ==&quot;
            }
            ]
        }
        }
    },
    &quot;id&quot;: -1
}
\`\`\`
</code></pre></li></ul></li><li><p>Tendermint API endpoint (uses default 1317 port): <code>https://api.rosm.rollkit.dev</code></p><ul><li><p>Example: <code>https://api.rosm.rollkit.dev/cosmos/auth/v1beta1/accounts/wasm1lysztpn74kl40w6ghfhy7xr0v44r658szuysl5</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;account&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;@type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/cosmos.auth.v1beta1.BaseAccount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wasm1lysztpn74kl40w6ghfhy7xr0v44r658szuysl5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;pub_key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;account_number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;sequence&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul></li><li><p>Block Explorer: <a href="https://canary.modular.cloud/rollkit-cosmwasm" target="_blank" rel="noreferrer">https://canary.modular.cloud/rollkit-cosmwasm</a></p></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The modular.cloud explorer is work in progress. In the meanwhile, the wasm CLI can be used to query the accounts. For example: to collect the transactions for any account, following command can be used.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wasmd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> txs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;message.sender=&#39;wasm1lysztpn74kl40w6ghfhy7xr0v44r658szuysl5&#39;&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.rosm.rollkit.dev</span></span></code></pre></div></div><ul><li>Faucet: <a href="https://faucet.rosm.rollkit.dev/" target="_blank" rel="noreferrer">https://faucet.rosm.rollkit.dev/</a><ul><li>You can request 1 rosm (or 1000000urosm) every 24 hours.<br><img src="`+c+'" alt="Faucet"></li></ul></li><li>Mocha Namespace: <code>000000000000000000000000000000000000b7b24d9321578eb83626</code>, <a href="https://mocha.celenium.io/namespace/000000000000000000000000000000000000b7b24d9321578eb83626" target="_blank" rel="noreferrer">view it on Celenium</a></li><li>DA Block Time: <code>15s</code></li><li>Rollup Block Time: <code>10s</code></li></ul><h3 id="add-rosm-to-keplr" tabindex="-1">Add Rosm to Keplr <a class="header-anchor" href="#add-rosm-to-keplr" aria-label="Permalink to &quot;Add Rosm to Keplr&quot;">​</a></h3><p>Don&#39;t have the Keplr Browser extension? <a href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en%22" target="_blank" rel="noreferrer">Add Keplr Wallet Here</a></p>',8)),l("p",null,[s[0]||(s[0]=a("Click ")),d(E),s[1]||(s[1]=a(" to add Rosm testnet to your Keplr wallet"))])]))}});export{y as __pageData,A as default};
