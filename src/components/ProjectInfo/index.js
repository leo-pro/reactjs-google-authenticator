import React, {useState} from 'react';

import { 
  Container,
  CssBaseline,
  Paper,
  Typography,
  Box,
  Link,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton
} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';

import { useStyles, StyledTabs, StyledTab } from './styles.js';

import appScheme from '../../assets/application-scheme.png';


export default function ProjectInfo(){
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const techs = [
    {
      techName: 'ReactJS',
      description: 'Uma biblioteca do ecossistema do React para construir interfaces visuais para a Web.',
      link: 'https://pt-br.reactjs.org/'
    },
    {
      techName: 'Material UI',
      description: 'Biblioteca de componentes React para um desenvolvimento ágil e fácil. Construa seu próprio design, ou comece com Material Design.',
      link: 'https://material-ui.com/pt/'
    },
    {
      techName: 'Javascript',
      description: 'JavaScript(JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como Node.js',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      techName: 'HTML5',
      description: 'HTML5 é mais recente evolução do padrão que define o HTML. A versão 5 traz um conjunto maior de tecnologias que permite o desenvolvimento de aplicações e web sites mais diversos e poderosos.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5'
    },
    {
      techName: 'CSS3',
      description: 'CSS(Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML. O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
      techName: 'DotEnv',
      description: 'Essa é a ferramenta utilizada para orquestrar as variáveis ambiente de um projeto. O nome dela sugere o arquivo em que as informações ficarão, <code>dot</code> que é ponto em inglês acrescido de <code>env</code>, então temos o arquivo <code>.env</code> que é composto de chaves e valores.',
      link: 'https://pt-br.reactjs.org/'
    }
  ]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper className={styles.paper} elevation={1}>
        <div className={styles.tab}>
          <StyledTabs 
            variant="fullWidth"
            value={value} 
            onChange={handleChange} 
            aria-label="styled tabs example"
            centered
          >
            <StyledTab label="Sobre" />
            <StyledTab label="Tecnologias" />
            <StyledTab label="Github" />
            <StyledTab label="Deploy" />
          </StyledTabs>
          
          <TabPanel value={value} index={0}>
            <p>Essa aplicação foi construida com base na biblioteca ReactJS e na API de authenticação do Google, a Google OAuth. Na página de <code>SignIn</code> é possível se conectar com sua conta do Google e logo em seguida você será direcionado para esse dashboard com as informações do usuário, que são retornadas em um objeto <code>JSON</code> após a requisição na API do Google.</p>

            <p>O ReactJS foi escolhido para construção desta aplicação para lidar com os Estados da aplicação(Hooks <code>useState</code>) no momento do Login e pela agilidade em construir componentes reutilizáveis por toda aplicação. Em conjunto com a pacote do framework Material UI, é possível utilizar componentes visuais completos em poucas linhas de código, ou até mesmo sobrescrever novos componentes baseados nas múltiplas opções disponíveis no framework, como <code>Button</code>, Layouts responsivos com <code>Container</code>/<code>Grid</code> e <code>Navbars</code>.</p>  

            <p>A imagem abaixo traz uma representação do funcionamento da aplicação.</p>

            <img src={appScheme} alt="application scheme" width="100%"/>

            <p>Como no exemplo da imagem, a aplicação faz uma requisição na API OAuth passando a <code>CLIENT_ID</code> para obter um <code>TOKEN</code> de acesso, que vai permitir retornar um objeto <code>JSON</code> com <code>name, email, imageUrl</code>.</p>

            <p>Para conseguir as credenciais necessárias para executar a aplicação, é preciso ter uma conta de desenvolvedor no Google. Mais informações sobre o Google API's, incluido a documentação completa, está disponível em <Link href="https://console.developers.google.com/" target="_blank">Developers Google</Link>.</p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h6">Linguagens, Frameworks e Pacotes NPM</Typography>
            <Grid container spacing={1}>
              { techs.map((tech) => (  
                <Grid item xs={6} sm={4}>
                  <Card className={styles.card}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h3">
                          { tech.techName }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          { tech.description}
                          <Link  href={techs.link}></Link>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h6">Acesse o repositório no Github.</Typography>
            <Link href="https://github.com/leo-pro/reactjs-google-authenticator" target="_blank">
              <IconButton size="medium" className={styles.buttonIcon}>
              <GitHubIcon style={{ marginRight: '0.5rem'}}/> Ver o Código
            </IconButton>
          </Link>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography variant="h6">Deploy no Heroku</Typography>
            <p>Heroku é uma plataforma de computação na nuvem que suporta várias linguagens de programação. Uma das primeiras plataformas em nuvem, o Heroku está em desenvolvimento desde junho de 2007. A plataforma oferece no plano gratuito até 5 aplicações com SSL Gratuito e domínio personalizado.</p>
            <Link href="https://dashboard.heroku.com/" target="_blank">
              <IconButton size="medium" className={styles.buttonIcon}>
                Conhecer mais
              </IconButton>
            </Link>
          </TabPanel>
        </div>
      </Paper>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center" style={{marginBottom: '1rem'}}>
          {'Made with ReactJS by '}
          <Link color="inherit" href="https://devleo.com.br">
            { 'Leonardo Alves' }
          </Link>{' '}
        </Typography>
      </Box>  
    </Container>
  );
}

function TabPanel(props){
  const styles = useStyles();
  const { children, value, index, ...other } = props;

  return(
    <Container 
      className={styles.tabPanel} 
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </Container>
  );
}