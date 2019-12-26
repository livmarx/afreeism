<template>
  
  <div>
    <div class="HomePage">
      <div class="Top"> 
        <div style="padding:0px 20px;">Login</div>
        <div style="padding:0px 20px;">Contribute</div>
      </div>
      <div class="Logo">
        <routerLink :to="{name: 'Home'}">
        <div>The</div>
        <div>Afreeist</div>
        <div>Society</div>
        </routerLink>
      </div>
      <div class="Quote">
          <p style="font-size:24px;">"Tout comprendre, c'est tout pardonner."</p>
      </div>
      <div class="TopMen">
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Explore'}">What Is Afreeism?</routerLink></div>
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Who_Are_We'}">Who Are We?</routerLink></div>
      </div>
      <div class="Main">
    <p class="Null">
      Afreeism (ay'-free-izm) is a simple idea.  Yet it is an idea so powerful that, if fully embraced, 
      it radically alters the 
      way we see the world. It changes how we view each other and how we treat one another. 
      It shakes up our conceptions of the good society and of good social policy. It makes 
      us better people, removes impediments to our own happiness, and increases the joy we 
      find in life. It is an idea based in science and reason, requiring no leaps of faith. 
      It is an idea whose origins date back over three millennia, and at the same time is 
      rooted in modern scientific discovery. It is not an easy idea. It requires abandoning 
      a worldview that we probably have never questioned, a worldview that we take for granted, 
      a worldview that affects our actions on a daily basis.
    </p>     
    <p>    
      What is this radical yet ancient idea? It is simply this: we have no free will. 
      The universe is a web of causation dating back to the beginning of time. Our 
      actions are a part of this web. Although we feel that we are making decisions 
      on the basis of free will, this is just an illusion. We could not have acted 
      differently than we did.
    </p>   
    <p>
    <b>What does afreeism say about how to live life?</b>
    </p>
    <p>
      When we give up the illusion of free will, our perspective on life changes.  We see that 
      the notion that people deserve things (punishment, rewards, blame, retribution) no 
      long makes sense.  And that applies to ourselves as well.  As a result:
    </p>     
    <p>
      •	We will support social policies that are both more humane and more effective. 
      This applies particularly in the area of criminal justice, but also to many other 
      areas of government policy. 
    </p>     
    <p>
      •	We will act more generously 
      towards other people in our personal lives. In particular, we will become more tolerant and more 
      accepting of other people, their life situations, and their actions. 
    </p>     
    <p> 
      •	We will improve our attitude towards ourselves 
      by mitigating feelings of guilt, regret, remorse, and self-blame, all of which are impediments 
      to a joyful life. 
    </p>     
    <p> 
  These are just a few of the implications of afreeism.  Afreeism has much to say about our
  place in the universe, our relationship to our fellow beings, and how we want to organize
  society.</p>
      </div>
      <div class="RSidebar" style="padding:20px;">
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      </div>
      <div class="Bottom">
        Bottom
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
};
</script>
<style scoped>
.HomePage {
  display:grid;
  grid-template-columns: 200px auto 200px;
  grid-template-rows: 30px auto auto auto 30px;
  grid-template-areas:
    'Top Top Top'
    'Logo Quote RSidebar'
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
  background-color:white;
  font: 36px "Times New Roman";
  border-style:solid;
  border-color:#caebf2;
  padding:20px;
}
.Quote {
  grid-area: Quote;
  background-color:white ; 
  font: 18px "Times New Roman";
  text-align: center;
  line-height: 100px;
  border-style:solid;
  border-color:#caebf2;
  display:flex;
  align-items:center;
  justify-content: center;
}
.TopMen {
  display:flex;
  justify-content:flex-start;
  grid-area: TopMen;
  background-color:#F5DAA4;
  text-align:left;
}
.Main {
  grid-area: Main;
  background-color:white;
  padding: 0px 30px;
}
.RSidebar {
  grid-area: RSidebar;
  background-color:#074477;
}
.Bottom {
  grid-area: Bottom;
  background-color:#074477;
}
.Tolstoy {
  display:flex;
  align-items:flex-end;
  padding:0px;
}
</style>
