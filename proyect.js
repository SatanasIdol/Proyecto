//Fibonacci
function fibRec(n){
  return n<=1 ?  n : (fibRec(n-2)+fibRec(n-1));
}
  
function fibItera(n){
  let a = 1;
  let b = 1;
  const fibSeries = n==1 ? [a] : [a,b];
  
  for (let i = 2; i < n; i++) {
    nextFib = a + b;
    fibSeries.push(nextFib);
    a = b;
    b = nextFib;
  }
  return fibSeries;
}

//Numero Aureo
function aureoRec(n){
  return fibRec(n+1)/fibRec(n);
}

function aureoItera(n) {
  let a = 1;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const nextAu = a + b;
    a = b;
    b = nextAu;
  }
  return b/a;
}

// mensaje en pantalla
alert("Hola, este programa calcula los primeros n terminos de la secuencia de Fibonacci, ademas "+
      "calcula una aproximacion del numero aureo");
x=true;

// ingreso y validacion de datos
while(x==true){
  let n = prompt("Digite un numero");
  (n > '0') && (n <= '9')
  ? (n=parseInt(n),console.log(`Los primeros ${n} términos de la secuencia de Fibonacci son: ${fibItera(n)}`),
  console.log(`La serie de Fibonacci hasta el término ${n} es: ${fibRec(n)}`),
  console.log(`El número áureo calculado con los primeros ${n} términos de la serie de Fibonacci es aproximadamente: ${aureoItera(n)}`),
  console.log("Otro redondeo del numero aureo: "+aureoRec(n)),x=false) 
  : alert("Porfavor digite un valor valido ");
}
