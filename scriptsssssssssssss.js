<script>
            
            var rIndex,
                table = document.getElementById("table").innerHTML = window.location.search;
            
            // check the empty input
            function ch<eckEmptyInput()
            {
                var isEmpty = false,
                    fname = document.getElementById("fname").value,
                    Cdate = document.getElementById("Cdate").value,
                    Cname = document.getElementById("Cname").value;
                    Origin = document.getElementById("Origin").value;
                    CNname = document.getElementById("CNname").value;
                    Dstn = document.getElementById("Dstn").value;
                    City = document.getElementById("City").value;
                    Inumb = document.getElementById("Inumb").value;
                    pkge = document.getElementById("pkge").value;
                    Docs = document.getElementById("Docs").value;
            
            
            
                if(fname === ""){
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(Cdate === ""){
                    alert("Cdate Connot Be Empty");
                    isEmpty = true;
                }
                else if(Cname === ""){
                    alert("Cname Connot Be Empty");
                    isEmpty = true;
                }
                else if(Origin === ""){
                    alert("Origin Connot Be Empty");
                    isEmpty = true;
                }
                else if(CNname === ""){
                    alert("CNname Connot Be Empty");
                    isEmpty = true;
                }
                else if(Dstn === ""){
                    alert("Dstn Connot Be Empty");
                    isEmpty = true;
                }
                else if(City === ""){
                    alert("City Connot Be Empty");
                    isEmpty = true;
                }
                else if(Inumb === ""){
                    alert("Inumb Connot Be Empty");
                    isEmpty = true;
                }
                else if(pkge === ""){
                    alert("pkge Connot Be Empty");
                    isEmpty = true;
                }
                else if(Docs === ""){
                    alert("Docs Connot Be Empty");
                    isEmpty = true;
                }

                return isEmpty;
            }
            
            // add Row
            </script>