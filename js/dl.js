/* ----------dropdown lists---------- */

/* funkce Update prepise polozky dropdown listu, ktrey obsahuje stroje, podle zvolene kategorie z dropdown listu, ktery obsahuje kategorie */
function Update()
{
    /* kategorie stroju jako pole, kde kazdy prvek obsahuje NAZEV, ID a LIST STROJU jako pole */
    var Categories =
        [
            /*       NAZEV,       ID,  LIST STROJU jako pole */
            ["Nakladače", "1", ["5035","5055", "5065","5065T", "5075", "5085", "8085", "8085T", "8105", "8115"]],
            ["Bagry", "2", ["ViO33-6", "ViO38-6", "SV60"]],
            ["Manipulátory", "3", ["1245", "2706", "3507", "4407"]]
        ];
    /* prirazeni weboveho prvku dropdown list ktery obsahuje kategorie do promenne DropDownCategories */
    var DropDownCategories = document.getElementById("2");
    /* prirazeni weboveho prvku dropdown list ktery obsahuje stroje do promenne DropDownMachines */
    var DropDownMachines = document.getElementById("3");
    /* prirazeni hodnoty VALUE zvolene kategorie do promenne SelectedCategory */
    var SelectedCategory = DropDownCategories.options[DropDownCategories.selectedIndex].value;
    /* vycisti polozky dropdown listu DropDownMachines ktery obsahuje stroje*/
    Clear(DropDownMachines);

    /* pokud SelectedCategory (hodnota VALUE zvolene kategorie) neni "0" ("Vyberte kategorii") */
    if (SelectedCategory != "0")
    {
        /* deklarovani promennych Category a Machines pro pozdejsi pouziti */
        var Category;
        var Machines;

        /* FOR cyklus pro vsechna i od 0 do Categories.length - 1 pricitanim po 1 */
        /* (projde postupne kategorie a pokud je dana kategorie oznacena, tak naplni dropdown list, ktery ma obsahovat stroje, stroji dane kategorie) */
        for (var i = 0; i < Categories.length; i++)
        {
            /* prirazeni i-te polozky pole Categories (i-ta kategorie stroju jako pole ktere obsahuje NAZEV, ID a LIST STROJU) do promenne Category */
            Category = Categories[i];

            /* pokud je Category[1] (hodnota ID i-te kategorie) rovno SelectedCategory (hodnota VALUE zvolene kategorie) */
            if (Category[1] == SelectedCategory)
            {
                /* prirazeni Category[2] (hodnota LIST STROJU i-te kategorie) do promenne Machines */
                Machines = Category[2];

                /* FOR cyklus pro vsechna j od 0 do Machines.length - 1 pricitanim po 1 */
                /* (naplni dropdown list ktery ma obsahovat stroje stroji dane kategorie) */
                for (var j = 0; j < Machines.length; j++)
                {
                    /* deklarovani promenne NewOption jako vytvoreni nove html polozky dropdown listu <option>*/
                    var NewOption = document.createElement('option');

                    /* prepsani html kodu uvnitr NewOption (nove polozky <option>) na text, ktery odpovida Machines[j] (j-ta polozka hodnoty LIST STROJU i-te kategorie) */
                    NewOption.innerHTML = Machines[j];
                    /* nastaveni hodnoty VALUE promenne NewOption na hodnotu j + 1 (<option value="j + 1">) */
                    NewOption.value = j + 1;
                    /* pridani NewOption (nova polozka <option>) na konec dropdown listu ktery obsahuje stroje */
                    DropDownMachines.appendChild(NewOption);
                }
            }
        }
    }
}

/* funkce Clear smaze polozky daneho dropdown listu a ponecha pouze tu prvni */
function Clear(DropDownList)
{
    /* nastavi delku dropdown listu jako 1 (ponecha prvni polozku a zbytek smaze) */
    DropDownList.options.length = 1;
}

/* funkce Write vytvori a zapise odkaz ke stazeni pdf konkretniho stroje ve webovem prvku ID="3" */
function Write()
{
    /* prirazeni weboveho prvku dropdown list ktery obsahuje stroje do promenne DropDownMachines */
    var DropDownMachines = document.getElementById("3");
    /* prirazeni hodnoty VALUE zvoleneho stroje do promenne SelectedMachine */
    var SelectedMachine = DropDownMachines.options[DropDownMachines.selectedIndex].value;

    /* pokud SelectedMachine (hodnota VALUE zvoleneho stroje) neni "0" ("Vyberte stroj") */
    if (SelectedMachine != "0")
    {
        /* prirazeni hodnoty TEXT zvoleneho stroje do promenne Text */
        var Text = DropDownMachines.options[DropDownMachines.selectedIndex].text;

        /* prepsani html kodu uvnitr weboveho prvku ID="3" na ODKAZ, ktery obsahuje Text (hodnota TEXT zvoleneho stroje) tak, aby odkazoval na konkretni pdf */
        document.getElementById("pdf").innerHTML = "<a id='odkaz' target='_blank' href='dokumentace/pdf/" + Text + ".pdf'><i class=\"fa fa-file-pdf\"></i>" + Text + "</a>";
    }
}