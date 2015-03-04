# learningjs

A ideia a principio é comparar um crud feito no iojs com um feito em nodejs. 

Na pasta iojs o stack é basicamente expressjs, co e mongorito e para rodar "iojs --harmony app.js"
Na pasta do nodejs o stack é basicamente expressjs e mongoose e parar rodar "nodejs app.js"

Comecei também a iniciar um teste de carga para ver qual dos dois tem um desempenho melhor, utilizando o siege.
Exemplo:
siege -f teste.iojs.siege -t 1M -T application/json - c 100
siege -f teste.nodejs.siege -t 1M -T application/json - c 100

Para instalação tanto do nodejs como do iojs usei o nvm.
https://github.com/creationix/nvm
