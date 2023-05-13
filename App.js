import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [frase, setFrase] = useState(null);
  const [imagem, setImagem] = useState(require('./components/biscoito.png'));

  const frases = [
    'So tem uma coisa para viver bem!, toca o hino do CORINTHIANS cascauuuuuuuun',
    'vai corinthians caralhoooooooooooo,pooraaaaaaaaaaaa',
        'Acredite em si mesmo e tudo será possível.',
    'A vida é uma viagem, aproveite o passeio.',
    'O sucesso está a um passo daqueles que não desistem.',
    'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
  'Siga os bons e aprenda com eles.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'Aquele que se importa com o sentimento dos outros, não é um tolo.',
  'A adversidade é um espelho que reflete o verdadeiro eu.',
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'O riso é a menor distância entre duas pessoas.',
  'Os defeitos são mais fortes quando o amor é fraco.',
  'Amizade e Amor são coisas que se unem num piscar de olhos.',
  'Surpreender e ser surpreendido é o segredo do amor.',
  'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
  'A paciência na adversidade é sinal de um coração sensível e corajoso.',
  'A verdadeira felicidade é fazer o bem sem esperar nada em troca.',
  'Só é lutador quem sabe lutar consigo mesmo.',
  'Amizade verdadeira é aquela que nos permite falar, ao amigo, de todos os seus defeitos e de todas as nossasqualidades',
  'A melhor maneira de ser feliz é contribuir para a felicidade dos outros.',
  'O amor não faz o mundo girar. O amor é o que faz o giro valer a pena.',
  'A persistência é o caminho do êxito.',
  'O amor está mais próximo do que você imagina.',
  'O importante não é vencer todos os dias, mas lutar sempre.',
  'A sorte favorece a mente bem preparada.',
  'Sua visão se tornará clara apenas quando você olhar para dentro do seu coração.',
  'Quem olha para fora sonha; quem olha para dentro acorda.',
  'O que você pensa, você se torna.',
  'O pessimista vê dificuldade em cada oportunidade. O otimista vê oportunidade em cada dificuldade.',
  'Não importa o quão longe você vá na direção errada, nunca é tarde para voltar.',
  'Você é livre para fazer suas escolhas, mas é prisioneiro das consequências.',
  'O sucesso é a soma de pequenos esforços repetidos diariamente.',
  'Se você quer ser feliz, faça os outros felizes.',
   'A melhor forma de prever o futuro é inventá-lo.',
  'O que você faz hoje pode melhorar todos os seus amanhãs.',
  'Você é aquilo que pensa ser.',
  'Não deixe que o medo de cair o impeça de voar.',
  'A vida é uma viagem, não um destino.',
  'O fracasso é a oportunidade de começar de novo, com mais experiência.',
  'A felicidade não é uma estação onde chegamos, mas uma maneira de viajar.',
  'A única coisa pior do que estar cego é ter visão, mas não ter uma visão.',
  'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
  'A disciplina é a ponte entre objetivos e realizações.',
  'A esperança é a última a morrer.',
  'A verdadeira educação consiste em pôr a descoberto ou fazer atualizar o melhor de uma pessoa.',
  'Não espere por líderes, faça você mesmo, pessoa por pessoa.',
  'O conhecimento fala, mas a sabedoria escuta.',
  'A sabedoria é saber o que fazer; a virtude é fazê-lo.',
  'O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.',
  'Se você não pode explicar algo de forma simples, é porque não entendeu bem.',
  ];
  

  const quebrarBiscoito = () => {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
    setImagem(require('./components/biscoitoAberto.png'));
  };

  const novoBiscoito = () => {
    setFrase(null);
    setImagem(require('./components/biscoito.png'));
  };

  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.imagem} />
      {frase && <Text style={styles.frase}>{frase}</Text>}
      <TouchableOpacity onPress={quebrarBiscoito} style={styles.botao}>
        <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={novoBiscoito} style={styles.botao}>
        <Text style={styles.textoBotao}>Novo Biscoito</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  imagem: {
    width: 200,
    height: 200
  },
  frase: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#dd7b22'
  },
  botao: {
   width:230,
   height:50,
   borderWidth:2,
 borderColor:'#dd7b22',
 borderRadius:25,
 margin:10
  },

  textoBotao: {
    textAlign:'center',
    margin:10,
    marginLeft:19,
    color: '#dd7b22',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default App;