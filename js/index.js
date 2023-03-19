fetch('https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-parcoursup&q=&rows=100&sort=tri&facet=session&facet=contrat_etab&facet=cod_uai&facet=g_ea_lib_vx&facet=dep_lib&facet=region_etab_aff&facet=acad_mies&facet=ville_etab&facet=lib_for_voe_ins&facet=select_form&facet=fili&facet=form_lib_voe_acc&facet=fil_lib_voe_acc&facet=detail_forma&facet=tri&facet=cod_aff_form&facet=etablissement_id_paysage&facet=composante_id_paysage&timezone=Europe%2FBerlin')
  .then(response => response.json())
  .then(data => {
    const nomEcole = data.facet_groups[10]["facets"]
            for(let i = 0 ; i < nomEcole.length ; i += 1 ){
              tbody = document.querySelector("tbody")
              ecole = document.createElement("tr")
              ecole.classList.add('level-item')
              ecole.classList.add('subtitle')
              ecole.textContent = nomEcole[i]["name"]
              tbody.appendChild(ecole)
            }
            
  })
  .catch(error => console.error(error))
