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
        <span>The Afreeist Handbook</span>
      </div>
      <TopMenCode />
      <div class="Main">
        <div class="MainText">
          <p>
            The Afreeist Handbook presents the ideas and ideals of afreeism.
          </p>
          <p style="text-indent:20px">
               View the Afreeist Handbook <a href="Afreeist_Handbook.pdf">here</a>.
          </p>
          <p style="text-indent:20px">
            Download the Afreeist Handbook <a href="Afreeist_Handbook.pdf" download>here</a>.
          </p>
          <p>
            Because the ideas 
            afreeism are based on fact and reason, and because none of us have a monopoly on 
            the truth, the Afreeist Handbook is, and always will be, a work in progress.  We
            invite your thoughts, your comments, your criticisms, about the ideas in the Handbook.
            Please send these to smarks@bu.edu.
          </p>
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
