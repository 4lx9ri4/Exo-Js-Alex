//test
function changerStyle(){
  /*Modifi la couleur de parag1*/
        document.getElementById('parag1').style.color="#FFF";
  /*Modifi la couleur du background de body*/
        document.body.style.backgroundColor="#000";
  /*Modifi les bordures de parag1*/
        document.getElementById('parag1').style.border="10px dotted red";
  /*Modifi les marges interne de parag*/
        document.getElementById('parag1').style.padding="5px";
}
/*générer un paragraphe via un bouton*/
function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton_'+id).innerHTML='Cacher le texte';
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton_'+id).innerHTML='Afficher le texte';
    }
    return true;
}
