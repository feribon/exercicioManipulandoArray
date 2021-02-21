
const booksByCategory = [
   {
      category: "Riqueza",
      books: [
         {
            title: "Os segredos da mente milionaria",
            author: "T. Hary Eker",
         }, {
            title: "O homem mais rico da babilonia",
            author: "George S. Clason",
         }, {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter",
         },
      ],
   }, {
      category: "Inteligencia Emocional",
      books: [
         {
            title: "Voce é insubstituivel",
            author: "Augusto Cury",
         }, {
         title: "Ansiedade, como enfrentar o mal do seculo",
         author: "Augusto Cury",
         }, {
            title: "Os 7 habitos das pessoas altamente eficazes",
            author: "Stephen R. Covey",
         },
      ],
   },
];
// total de categorias
const totalCategorias = booksByCategory.length
console.log(`${totalCategorias} categorias`)

// total de autores
for(let categoria of booksByCategory){
   console.log(`total de livros na categoria: ${categoria.category}`)
   console.log(categoria.books.length)
}

// numero de autores
function contaAutores(){
   let autores = [];
   for(let categoria of booksByCategory){
      for(let livro of categoria.books){
         if(autores.indexOf(livro.author) == -1){
            autores.push(livro.author)
         }
      }
   }console.log(`${autores.length} autores`)
   console.log(autores)
   }
contaAutores();

// livros do Augusto Cury
function aCury(){
   let livroCury = [];
   for(let categoria of booksByCategory){
      for(let livro of categoria.books){
         if(livro.author === "Augusto Cury"){
            livroCury.push(livro.title)
         }
      }
   }console.log(livroCury)
   }
   aCury();

   // retorna livros do autor escolhido
   function retornaLivros(autor){
      let livroAutor = [];
      for(let categoria of booksByCategory){
         for(let livro of categoria.books){
            if(livro.author === autor){
               livroAutor.push(livro.title)
            }
         }
      }console.log(`livros do ${autor}: ${livroAutor.join("| ")}`)
      }
      retornaLivros("T. Hary Eker")
      retornaLivros("George S. Clason")
      retornaLivros("Robert T. Kiyosaki e Sharon L. Lechter")
      retornaLivros("Augusto Cury")
      retornaLivros("Stephen R. Covey")