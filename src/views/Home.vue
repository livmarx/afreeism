<template>
  
  <div>
    <div class="HomePage">
      <div class="Top"> 
        <div style="padding:0px 20px;">Login</div>
        <div style="padding:0px 20px;">Contribute</div>
      </div>
      <div class="Logo">
        <LogoCode />
      </div>
      <div class="PageTitle">
        <div style="height:30px; display:flex; flex-direction:column; justify-content:center;">
          <div style="font-size:24px; margin:0px; padding:0px; height:40px;">
            "Tout comprendre, c'est tout pardonner."
          </div>
        <div style="font-size:18px; margin:0px; padding:0px; text-align:right">--Tolstoy, War and Peace</div>        </div>
      </div>      
      <TopMenCode />
      <div class="Main">
        <div class="MainText">
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
      </div>
      <div class="RSidebar" style="padding:20px;">
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      </div>
      <div class="Bottom">
        <BottomMenuCode />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoCode from '@/views/LogoCode.vue'
import BottomMenuCode from '@/views/BottomMenuCode.vue'
import TopMenCode from '@/views/TopMenCode.vue'
export default {
  name: 'Home',
  components:{
    TopMenCode,LogoCode,BottomMenuCode,
  },
}
</script>
<style scoped>

</style>
