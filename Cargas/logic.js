        
    //DOM to Monofasic Charges
        
        
        function addFields(){
            // Number of inputs to create
            var number = document.getElementById("member").value;
            // Container <div> where dynamic content will be placed
            var container = document.getElementById("container");
            // Clear previous contents of the container
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<number;i++){
                // Append a node with a random text
                container.appendChild(document.createTextNode("Carga" + " "+(i+1)+":" +" "  ));
                // Create an <input> element, set its type and name attributes
                container.appendChild(document.createElement("br"));
                container.appendChild(document.createTextNode("P(kW)"+":" +" "  ));
                
                var pa = document.createElement("input");

                pa.type="text";
                pa.className="pushar";
                pa.id= "pa" + i;

                container.appendChild(pa);

                //Fator P.


                container.appendChild(document.createElement("br"));

                container.appendChild(document.createTextNode(" " + " " + "cos(φ)"+":" +" "  ));
                
                var cosfi = document.createElement("input");

                cosfi.type="text";
                cosfi.id= "fatorp" + i;

                container.appendChild(cosfi);

                //Horas de Funcionamento

                container.appendChild(document.createElement("br"));

                container.appendChild(document.createTextNode("Funcionamento/Dia"));


                //Horas em F.V.

                container.appendChild(document.createElement("br"));

                container.appendChild(document.createTextNode("F.V."+":" +" "));
                
                var fv = document.createElement("input");

                fv.type="text";
                fv.id= "fv" + i;
                fv.className="pushar1";

                container.appendChild(fv);

                container.appendChild(document.createElement("br"));
                container.appendChild(document.createElement("br"));




            }
        }



        
    //DOM to Trifasic Charges
        
        
        function addFields1(){
            // Number of inputs to create
            var number1 = document.getElementById("member1").value;
            // Container <div> where dynamic content will be placed
            var container1 = document.getElementById("container1");
            // Clear previous contents of the container
            while (container1.hasChildNodes()) {
                container1.removeChild(container1.lastChild);
            }
            for (i=0;i<number1;i++){
                // Append a node with a random text
                container1.appendChild(document.createTextNode("Carga" + " "+(i+1)+":" +" "  ));
                // Create an <input> element, set its type and name attributes
                container1.appendChild(document.createElement("br"));

                container1.appendChild(document.createTextNode("P(kW)"+":" +" "  ));
                
                var pa1 = document.createElement("input");

                pa1.type="text";
                pa1.className="puxar";
                pa1.id= "pa1" + i;

                container1.appendChild(pa1);

                //Fator P.


                container1.appendChild(document.createElement("br"));

                container1.appendChild(document.createTextNode(" " + " " + "cos(φ)"+":" +" "  ));
                
                var cosfi1 = document.createElement("input");

                cosfi1.type="text";
                cosfi1.id= "fatorp1" + i;

                container1.appendChild(cosfi1);

                //Horas de Funcionamento

                container1.appendChild(document.createElement("br"));

                container1.appendChild(document.createTextNode("Funcionamento/Dia"));


                //Horas em F.V.

                container1.appendChild(document.createElement("br"));

                container1.appendChild(document.createTextNode("F.V."+":" +" "));
                
                var fv1 = document.createElement("input");

                fv1.type="text";
                fv1.id= "fv1" + i;
                fv1.className="puxar1";

                container1.appendChild(fv1);

                container1.appendChild(document.createElement("br"));
                container1.appendChild(document.createElement("br"));
        }
        }

        // END OF DOM´s****************************************************************************************






        //LOGIC FUNCTION***************************************************************************************




        var fatorp_fv1 = document.getElementById("cos_fi_fv");
        var reativa_fv1 = document.getElementById("en_ri_t");
        var reativa_hv1 = document.getElementById("en_rc_t");
        var reativa_e11 = document.getElementById("en_re1");
        var reativa_e21 = document.getElementById("en_re2");
        var reativa_e31 = document.getElementById("en_re3");

        function calcular(){

        var number = document.getElementById("member");
        var numero_mono = Number(Number(number.value));
        var number1 = document.getElementById("member1");
        var numero_tri = Number(Number(number1.value));



        var energia_ativa_mono_total_fv=0;
        var energia_reativa_mono_total_fv=0;

        var energia_ativa_tri_total_fv=0;
        var energia_reativa_tri_total_fv=0;


        for(i=0;i<numero_mono;i++){
        var potencia_ativa_instante= document.getElementById("pa"+i);
        var pa_instante = Number(Number(potencia_ativa_instante.value));
        var fator_potencia_instante= document.getElementById("fatorp"+i);
        var fp_instante = Number(Number(fator_potencia_instante.value));
        var fora_vazio_instante= document.getElementById("fv"+i);
        var fv_instante= Number(Number(fora_vazio_instante.value));

        var potencia_reativa_instante = pa_instante*Math.tan(Math.acos(fp_instante));

        var energia_ativa_fv_instantanea = pa_instante*fv_instante;

        energia_ativa_mono_total_fv=energia_ativa_mono_total_fv+energia_ativa_fv_instantanea;

        var energia_reativa_fv_instantanea = potencia_reativa_instante*fv_instante;

        energia_reativa_mono_total_fv=energia_reativa_mono_total_fv+energia_reativa_fv_instantanea;

        }

        for(i=0;i<numero_tri;i++){
        var potencia_ativa_instante1 = document.getElementById("pa1"+i);
        var pa_instante1 = Number(Number(potencia_ativa_instante1.value));
        var fator_potencia_instante1= document.getElementById("fatorp1"+i);
        var fp_instante1 = Number(Number(fator_potencia_instante1.value));
        var fora_vazio_instante1= document.getElementById("fv1"+i);
        var fv_instante1= Number(Number(fora_vazio_instante1.value));

        var potencia_reativa_instante1 = pa_instante1*Math.tan(Math.acos(fp_instante1));

        var energia_ativa_fv_instantanea1 = pa_instante1*fv_instante1;


        energia_ativa_tri_total_fv=energia_ativa_tri_total_fv+energia_ativa_fv_instantanea1;


        var energia_reativa_fv_instantanea1 = potencia_reativa_instante1*fv_instante1;

        energia_reativa_tri_total_fv=energia_reativa_tri_total_fv+energia_reativa_fv_instantanea1;

        }

var energia_ativa_fv_total = energia_ativa_mono_total_fv+energia_ativa_tri_total_fv;
var energia_reativa_fv_total = energia_reativa_mono_total_fv+energia_reativa_tri_total_fv




        var fator_p_fv = Math.cos(Math.atan(energia_reativa_fv_total/energia_ativa_fv_total));

        var escal1;
        var escal2;
        var escal3;


        //Escalões:
        if(0.96>fator_p_fv && 0.93>=fator_p_fv){
        var reativa_096 = energia_ativa_fv_total*Math.tan(Math.acos(0.96));
        var reativa_093 = energia_ativa_fv_total*Math.tan(Math.acos(0.93));
        escal1 = reativa_093-reativa_096;
        }
        if(0.96>fator_p_fv && 0.93<fator_p_fv){
        var reativa_096 = energia_ativa_fv_total*Math.tan(Math.acos(0.96));
        escal1 = energia_reativa_fv_total-reativa_096;
        }
        if(0.96<=fator_p_fv){
        var reativa_096=0;
        escal1 =0;
        }

        if(0.93>fator_p_fv && 0.89>=fator_p_fv){
        var reativa_093 = energia_ativa_fv_total*Math.tan(Math.acos(0.93));
        var reativa_089 = energia_ativa_fv_total*Math.tan(Math.acos(0.89));
        escal2 = reativa_089-reativa_093;
        }
        if(0.93>fator_p_fv && 0.89<fator_p_fv){
        var reativa_093 = energia_ativa_fv_total*Math.tan(Math.acos(0.93));
        escal2 = energia_reativa_fv_total-reativa_093;
        }
        if(0.93<=fator_p_fv){
        var reativa_093=0;
        escal2=0;
        }

        if(0.89>fator_p_fv){
        var reativa_089 = energia_ativa_fv_total*Math.tan(Math.acos(0.89));
        escal3 =energia_reativa_fv_total-reativa_089;
        }
        if(0.89<=fator_p_fv){
        var reativa_089 = 0;
        escal3=0;
        }


if(escal1>=0 && fator_p_fv>0 && fator_p_fv<=1 && energia_ativa_fv_total>0){
        en_re1.value=escal1;
}
else{
        en_re1.value="Dados em Falta ou Inválidos";
}
if(escal2>=0 && fator_p_fv>0 && fator_p_fv<=1 && energia_ativa_fv_total>0){
        en_re2.value=escal2;
}
else{
        en_re2.value="Dados em Falta ou Inválidos";
}
if(escal3>=0 && fator_p_fv>0 && fator_p_fv<=1 && energia_ativa_fv_total>0){
        en_re3.value=escal3;
}
else{
        en_re3.value="Dados em Falta ou Inválidos";
}





        if(energia_reativa_fv_total>=0 && energia_ativa_fv_total>0 && fator_p_fv>0 && fator_p_fv<=1){
        en_ri_t.value=energia_reativa_fv_total;
        }
        else{
        en_ri_t.value="Dados em Falta ou Inválidos";
        }




        if(fator_p_fv>0 && fator_p_fv<=1){
        cos_fi_fv.value=fator_p_fv;
        }
        else{
        cos_fi_fv.value="Dados em Falta ou Inválidos";
        }


        var custo_e1 = document.getElementById("c_e1");
        var custo_e2 = document.getElementById("c_e2");
        var custo_e3 = document.getElementById("c_e3");
        var cu_e1 = Number(Number(custo_e1.value));
        var cu_e2 = Number(Number(custo_e2.value));
        var cu_e3 = Number(Number(custo_e3.value));
        var custo_serio;
        var custo_final = document.getElementById("custo_t")

        if(cu_e1==0 || cu_e2==0 || cu_e3 ==0){
        custo_final.value="Insira os custos de escalões"
        }
        else{
            if(energia_ativa_fv_total>0 && fator_p_fv>0 && fator_p_fv<=1){
            custo_serio= (escal1*cu_e1)+(escal2*cu_e2)+(escal3*cu_e2);
            custo_final.value=(custo_serio+" "+"‎€");
            }
            else{
            custo_final.value="Insira Dados!";
            }
        
        }
}


//Function RollDown

var keeptrack=false;
function rolldown(){

var botao_rolldown = document.getElementById("botao_rolldown");
var texto_rolldown = document.getElementById("rolldown");

if(keeptrack==false){
texto_rolldown.style.display='block';
keeptrack=true;
window.scrollTo(0,document.body.scrollHeight);
}
else{
texto_rolldown.style.display='none';
keeptrack=false;
}
}






