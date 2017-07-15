//Inputs
var energia_ativa_fv = document.getElementById("en_a_fv");
var energia_ativa_hv = document.getElementById("en_a_hv");
var preco_escalao1 = document.getElementById("en_r_p1");
var preco_escalao2 = document.getElementById("en_r_p2");
var preco_escalao3 = document.getElementById("en_r_p3");
var preco_capacitiva = document.getElementById("c_erc");

//Inputs Selectors

var custo_e1 = document.getElementById("custo_e1");
var custo_e2 = document.getElementById("custo_e2");
var custo_e3 = document.getElementById("custo_e3");
var custo_ehv = document.getElementById("custo_ecap");

//Results

var cosfi_fv = document.getElementById("cos_fi_fv");
var cosfi_hv = document.getElementById("cos_fi_hv");
var reativa_indutiva_total = document.getElementById("en_ri_t");
var reativa_capacitiva_total = document.getElementById("en_rc_t");
var custo = document.getElementById("c_er");

//Logic Function



function calcular(){

var ativa_fv= Number(Number(energia_ativa_fv.value));
var ativa_hv= Number(Number(energia_ativa_hv.value));
var escalao1=  Number(Number(preco_escalao1.value));
var escalao2=  Number(Number(preco_escalao2.value));
var escalao3=  Number(Number(preco_escalao3.value));

var custo_escalao1 = Number(Number(custo_e1.value));
var custo_escalao2 = Number(Number(custo_e2.value));
var custo_escalao3 = Number(Number(custo_e3.value));
var custo_escalaohv = Number(Number(custo_ehv.value));

var nao_acionar=false;

var preco_reativa_fv;
var preco_reativa_hv;

var valor_reativa_total;
var valor_reativa_escalao=0;
var valor_numero_reativa_total;


if((custo_escalao1==0 || custo_escalao2==0 || custo_escalao3==0) && custo_escalaohv==0){
alert("Insira os preços dos escalões!");
custo.value="";
reativa_capacitiva_total.value="";
reativa_indutiva_total.value="";
cos_fi_fv.value="";
cos_fi_hv.value="";
nao_acionar=true;
}
if(custo_escalao1<0 || custo_escalao2<0 || custo_escalao3<0 || custo_escalaohv<0){
alert("Preços de escalões inválidos!");
custo.value="";
reativa_capacitiva_total.value="";
reativa_indutiva_total.value="";
cos_fi_fv.value="";
cos_fi_hv.value="";
nao_acionar=true;
}



if(custo_escalao1>0 && custo_escalao2>0 && custo_escalao3>0){

if(ativa_fv==0 && ativa_hv==0){
custo.value="";
reativa_capacitiva_total.value="";
reativa_indutiva_total.value="";
cos_fi_fv.value="";
cos_fi_hv.value="";
nao_acionar=true;
alert("Insira Dados!");
}
if(ativa_fv<0){
custo.value="";
reativa_capacitiva_total.value="";
reativa_indutiva_total.value="";
cos_fi_fv.value="";
cos_fi_hv.value="";
nao_acionar=true;
alert("Energia Ativa Fora de Vazio Inválida!");
nao_acionar=true;
}
if(ativa_hv<0){
custo.value="";
reativa_capacitiva_total.value="";
reativa_indutiva_total.value="";
cos_fi_fv.value="";
cos_fi_hv.value="";
nao_acionar=true;
alert("Energia Ativa em Horas de Vazio Inválida!");
nao_acionar=true;
}

if((ativa_fv>0 || ativa_hv>0) && nao_acionar==false) {

//Horas Fora de Vazio

if(escalao1==0 && (escalao2>0 || escalao3>0)){
valor_reativa_total="Custos Escalão Inválidos!";
nao_acionar=true;
}
if(escalao2==0 && escalao3>0){
valor_reativa_total="Custos Escalão Inválidos!";
nao_acionar=true;
}
if(escalao1<0 || escalao2<0 || escalao3<0){
valor_reativa_total="Custos Escalão Inválidos!";
nao_acionar=true;
}

if(escalao1==0 && escalao2==0 && escalao3==0){
valor_reativa_total=("<="+((ativa_fv)*Math.tan(Math.acos(0.96))));
valor_numero_reativa_total=0;
}
if(escalao1>0 && escalao2==0 && escalao3==0){
valor_reativa_escalao=(escalao1)/(custo_escalao1);
valor_reativa_total= (valor_reativa_escalao + ((ativa_fv)*Math.tan(Math.acos(0.96))));
valor_numero_reativa_total=(valor_reativa_escalao+((ativa_fv)*Math.tan(Math.acos(0.96))));
}
if(escalao2>0 && escalao3==0 && escalao1>0){
valor_reativa_escalao=(escalao2)/(custo_escalao2);
valor_reativa_total= (valor_reativa_escalao + ((ativa_fv)*Math.tan(Math.acos(0.93))));
valor_numero_reativa_total=(valor_reativa_escalao+((ativa_fv)*Math.tan(Math.acos(0.93))));
}
if(escalao3>0 && escalao2>0 && escalao1>0){
valor_reativa_escalao=(escalao3)/(custo_escalao3);
valor_reativa_total= (valor_reativa_escalao + ((ativa_fv)*Math.tan(Math.acos(0.89))));
valor_numero_reativa_total=(valor_reativa_escalao+((ativa_fv)*Math.tan(Math.acos(0.89))));
}



reativa_indutiva_total.value=valor_reativa_total;





if(valor_numero_reativa_total>=0){

var cosfi_em_fora_vazio;

if(valor_numero_reativa_total==0){
if(ativa_fv>0 && escalao1>0){
cosfi_em_fora_vazio="<=0.96";
}
if(ativa_fv==0){
cosfi_em_fora_vazio="Não Existente!";
}
}
if(valor_numero_reativa_total>=0 && ativa_fv>0){
cosfi_em_fora_vazio= Math.cos(Math.atan(valor_numero_reativa_total/(ativa_fv)));
}

cos_fi_fv.value=cosfi_em_fora_vazio;


}
else{
cos_fi_fv.value="Dados Insuficientes";
nao_acionar=true;
}
}
}
else{
reativa_indutiva_total.value="";
cos_fi_fv.value="";
}
//Fim Horas F.V.


if(custo_escalaohv>0){

var custo_capacitiva=Number(Number(preco_capacitiva.value));


var energia_reativa_capacitiva= (custo_capacitiva)/custo_escalaohv;
var cosfi_em_vazio= Math.cos(Math.atan(energia_reativa_capacitiva/(ativa_hv)));
reativa_capacitiva_total.value=(energia_reativa_capacitiva);

if(energia_reativa_capacitiva>=0){
cosfi_hv.value=cosfi_em_vazio;
}
if(ativa_hv==0){
cosfi_hv.value="Não Existente";
}
}
else{
reativa_capacitiva_total.value="";
cos_fi_hv.value="";
}


if(nao_acionar==false){


if(ativa_hv>0 && ativa_fv==0){
custo.value=custo_capacitiva;
}
if(ativa_fv>0 && ativa_hv==0){
custo.value=escalao1+escalao2+escalao3;
}
if(ativa_fv>0 && ativa_hv>0){
custo.value=escalao1+escalao2+escalao3+custo_capacitiva;
}
}
if(nao_acionar==true){
if(ativa_hv>0 || ativa_fv>0){
custo.value="Dados Inválidos!";
}
if((custo_escalao1==0 || custo_escalao2==0 || custo_escalao3==0) && custo_escalaohv==0){
custo.value="";
}
else{
custo.value="";
}
}
}

//Function RollDown

var botao_rolldown = document.getElementById("botao_rolldown");
var texto_rolldown = document.getElementById("rolldown");
var keeptrack;


function rolldown(){

if(keeptrack!=true){
texto_rolldown.style.display='block';
keeptrack=true;
window.scrollTo(0,document.body.scrollHeight);
}
else{
texto_rolldown.style.display='none';
keeptrack=false;
}
}