<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {background-color:#d2d4cb;}
p {text-align:left; color:#000000;}
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
.ASTitle {
  background-color:#63c7c2;
  font-size:35px;
  margin: 20px 10px 5px;
  padding: 5px;
  border: 1px solid black;
  color: blue;
}
.ASTitle > div {
  font-size: 25px;
  color:indigo;
}
.TopMenu {
  display:flex;
  justify-content: space-between;
  margin:10px;
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
.Contents > div {
  width: 100%;
  font-size: 16px;
  color: black;
  padding:10px;
  margin:10px;
  border: 1px solid black;
  width:20%;
  background-color:lawngreen;
  flex-grow: 1;
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
</style>
