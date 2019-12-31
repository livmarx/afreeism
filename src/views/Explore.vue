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
        <span>What Is Afreeism?</span>
      </div>
      <TopMenCode />
      <div class="Main">
        <div class="MainText">
          <p>
            This website provides two ways to explore afreeism.  The first is a collection of short readings
            on various topics:
          </p>
          <div>
            <b><routerLink :to="{name: 'Basics'}">Afreeist Concepts and Ideals</routerLink></b>  
          </div>
          <p style="margin:20px">
            This is a collection of short readings on the various concepts and ideals of afreeism.
          </p>
          <p>
            <b><routerLink :to="{name: 'AfreeistHandbook'}">The Afreeist Handbook</routerLink></b>
          <div>
            <p style="margin:20px">
               The Afreeist Handbook is a more detailed description of the ideas and ideals of afreeism.
               It is recommended reading for anyone interested in afreeism.
            </p>
          </div>
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
p {text-align:left;}
</style>
