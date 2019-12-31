<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {background-color:#074477;}
p {text-align:left; color:black;}
div {text-align:left;}
a {
  text-decoration:none
  }
a:link {
  color:blue
  }
a:visited {
  color:blue;
}
a:hover {
  color:rgb(53, 1, 1);
}
a:active {
  color:yellow;
}
.TopMenu > div {
  font-size: 16px;
  color: black;
  padding:10px;
  margin:10px;
  border: 1px solid black;
  width:20%;
  background-color:chocolate;
}
.Contents {
  display:flex;
  justify-content: space-around;
  margin:10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #d2d4cb;
  width: 100%;
}
.HomePage {
  margin:0px;
  padding:0px;
  display:grid;
  grid-template-columns: 200px auto 175px;
  grid-template-rows: 35px auto auto auto 35px;
  grid-template-areas:
    'Top Top Top'
    'Logo PageTitle RSidebar'
    'TopMen TopMen RSidebar'
    'Main Main RSidebar'
    'Bottom Bottom Bottom'
}
.Top {
  grid-area: Top;
  background-color:#074477;
  display:flex;
  justify-content:flex-end;
  color:white;
}
.Logo {
  grid-area: Logo;
  background-color:#d5c7eb;
  font: 36px "Times New Roman";
  border-style:solid;
  border-color:#caebf2;
  padding:20px;
  text-align:center;
}
.LogoText {
  text-align:center;
}
.PageTitle {
  grid-area: PageTitle;
  background-color:blue; 
  background-image: url(/Stars3.jpg);
  background-repeat: no-repeat;
  background-size:cover;
  font: 36px "Times New Roman";
  text-align: center;
  line-height: 100px;
  border-style:solid;
  border-color:#caebf2;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  color:white;
}
.TopMen {
  display:flex;
  justify-content:flex-start;
  grid-area: TopMen;
  background-color:#caebf2;
  text-align:left;
}
.Main {
  grid-area: Main;
  background-color:#caebf2;
  padding: 10px;

}
.RSidebar {
  grid-area: RSidebar;
  background-color:#074477;
}
.Bottom {
  display:flex;
  justify-content:center;
  grid-area: Bottom;
  background-color:#074477;
  height: 50px;
}
.Tolstoy {
  display:flex;
  align-items:flex-end;
  padding:0px;
}
.TopicCategories {
background-color:#caebf2;
display:grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto;
text-align:center;
}
.TopicCategories > div {
text-align:center;
}
.CatActive {
padding:5px;
background-color:white;
height:30px;
border-top-style:solid;
border-left-style:solid;
border-right-style:solid;
border-top-left-radius:25px;
border-top-right-radius:25px;
}
.CatInactive {
background-color:beige;
padding:5px;
border-top-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-right-style:solid;
border-top-left-radius:25px;
border-top-right-radius:25px;
}
.TopicGrid {
  display:grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  border-left-style:solid;
  border-right-style:solid;
  background-color:white;
}
.Topic {
  background-color:beige;
  border-radius:25px;
  padding:20px;
  margin:10px;
  text-align:center;
}
.TopicHeading {
  text-align:center;
  font-variant:small-caps;
  color:#b04128;
}
.TopicExplanation {
  border:solid;
  margin-bottom:10px;
  padding: 10px;
  background-color:beige;
}
.MainText {
  border:solid;
  padding:20px;
  background-color:ivory;
  min-height:200px;  
}
.MainTextTopics {
  border-left-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  padding:20px;
  background-color:white;
  min-height:200px;  
}
</style>
