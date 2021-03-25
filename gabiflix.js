var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZmQ3MWEyNTYtOTY1OC00MTljLWI3OGUtMmU1ZDc2OTYxNDQ4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BOGUwMjk3YzktNDI0Yy00MzFiLWFjNmEtYTA2ODVjMzNhODhjXkEyXkFqcGdeQXVyOTQ1MDI4MzY@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTk3NDM4ODMwNl5BMl5BanBnXkFtZTcwMTYyNDIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNjk2ODQzNDYxNV5BMl5BanBnXkFtZTgwMTcyNDg4NjE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTExMjU4MTUwNTVeQTJeQWpwZ15BbWU3MDk2MzkwMjc@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"] 

var nomeFilmes = ["Vingadores-Ultimato","High School Musical","After","Harry Potter e a Pedra filosofal","Preciosa: Uma história de esperança","Até o Último Homem","It: A Coisa","Uma Linda Mulher","Espelho, Espelho Meu","Extraordinário","Como Eu Era Antes de Você","Velozes e Furiosos (2001)"]


 var catalogo = parseInt(prompt("Digite 1 para exibir todo o catálogo ou digite 2 para a sinpose de um filme específico: "))
 
 if (catalogo == 1){
   for(var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
}
 }  if (catalogo == 2){
   var filmes = parseInt(prompt("Selecione o filme para mais informações: \n 1: Vingadores-Ultimato \n 2: High School Musical \n 3: After \n 4: Harry Potter e a Pedra Filosofal \n 5: Preciosa: Uma história de esperança. \n 6: Até o Último Homem \n 7: It: A coisa \n 8: Uma Linda Mulher \n 9: Espelho, Espelho Meu \n 10: Extraordinário \n 11: Como Eu Era Antes de Você \n 12: Velozes e Furiosos (2001)"))
 }
  if (filmes == 1) {
    document.write("<h2>" +nomeFilmes[0] +"</h2>")
   document.write("<img src=" + listaFilmes[0] + ">")
    document.write("<h3>"+"Depois dos acontecimentos devastadores de Vingadores: Guerra Infinita (2018), o universo está em ruínas. Com a ajuda dos aliados restantes, os Vingadores se reúnem mais uma vez para reverter as ações de Thanos e restaurar o equilíbrio do universo"+"</h3>")
    
  } else if (filmes == 2){
    document.write("<h2>" +nomeFilmes[1] +"</h2>")
   document.write("<img src=" + listaFilmes[1] + ">")
    document.write("<h3>"+"Um popular atleta do ensino médio e uma garota com muito talento acadêmico conseguem papéis no musical da escola e desenvolvem uma amizade que ameaça a ordem social do East High."+"</h3>")
    
  } else if (filmes == 3){
   document.write("<h2>" +nomeFilmes[2] +"</h2>")
   document.write("<img src=" + listaFilmes[2] + ">")
    document.write("<h3>"+"Uma jovem se apaixona por um cara com um segredo obscuro e os dois embarcam em um relacionamento difícil. Baseado no romance de Anna Todd."+"</h3>")
    
  } else if (filmes == 4){
    document.write("<h2>" +nomeFilmes[3] +"</h2>")
   document.write("<img src=" + listaFilmes[3] + ">")
    document.write("<h3>"+"Um menino órfão se matricula em uma escola de magia, onde aprende a verdade sobre si mesmo, sua família e o terrível mal que assombra o mundo mágico."+"</h3>")
  } else if (filmes == 5){
       document.write("<h2>" +nomeFilmes[4] +"</h2>")
   document.write("<img src=" + listaFilmes[4] + ">")
    document.write("<h3>"+"No Harlem de Nova York, por volta de 1987, uma adolescente com excesso de peso, abusada e analfabeta que está grávida de seu segundo filho é convidada a se matricular em uma escola alternativa na esperança de que sua vida tome uma nova direção."+"</h3>")
  } else if(filmes == 6){
      document.write("<h2>" +nomeFilmes[5] +"</h2>")
   document.write("<img src=" + listaFilmes[5] + ">")
    document.write("<h3>"+"O Médico do Exército Americano da Segunda Guerra Mundial Desmond T. Doss, que serviu durante a Batalha de Okinawa, se recusa a matar pessoas e se torna o primeiro homem na história americana a receber a Medalha de Honra sem disparar um tiro."+"</h3>")
  } else if (filmes == 7){
    document.write("<h2>" +nomeFilmes[6] +"</h2>")
   document.write("<img src=" + listaFilmes[6] + ">")
    document.write("<h3>"+"No verão de 1989, um grupo de crianças intimidadas se reúne para destruir um monstro que muda de forma, que se disfarça de palhaço e ataca os filhos de Derry, sua pequena cidade do Maine."+"</h3>")
  } else if (filmes == 8){
    document.write("<h2>" +nomeFilmes[7] +"</h2>")
   document.write("<img src=" + listaFilmes[7] + ">")
    document.write("<h3>"+"Um homem em um negócio legal, mas prejudicial, precisa de uma escolta para alguns eventos sociais e contrata uma linda prostituta que conhece ... apenas para se apaixonar."+"</h3>")
  } else if (filmes == 9){
    document.write("<h2>" +nomeFilmes[8] +"</h2>")
   document.write("<img src=" + listaFilmes[8] + ">")
    document.write("<h3>"+"Uma rainha má rouba o controle de um reino e uma princesa exilada conta com a ajuda de sete rebeldes engenhosos para reconquistar seu direito de primogenitura."+"</h3>")
  } else if (filmes == 10){
    document.write("<h2>" +nomeFilmes[9] +"</h2>")
   document.write("<img src=" + listaFilmes[9] + ">")
    document.write("<h3>"+"Baseado no best-seller do New York Times, este filme conta a história incrivelmente inspiradora e comovente de August Pullman, um garoto com diferenças faciais que entra na quinta série, frequentando uma escola primária regular pela primeira vez."+"</h3>")
} else if (filmes == 11){
    document.write("<h2>" +nomeFilmes[10] +"</h2>")
   document.write("<img src=" + listaFilmes[10] + ">")
    document.write("<h3>"+"Uma garota em uma pequena cidade forma um vínculo improvável com um homem recém-paralítico de quem ela está cuidando."+"</h3>")
}else if (filmes == 12){
    document.write("<h2>" +nomeFilmes[11] +"</h2>")
   document.write("<img src=" + listaFilmes[11] + ">")
    document.write("<h3>"+"O policial de Los Angeles, Brian O'Conner, deve decidir onde realmente reside sua lealdade quando se apaixonar pelo mundo das corridas de rua que foi enviado para destruir disfarçado."+"</h3>")
}