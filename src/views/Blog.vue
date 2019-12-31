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
          <span>Blog</span>
      </div>
      <TopMenCode />
      <div class="Main">
        <div class="MainText">
          <p>Posted December 16, 2019 (See Archive for past posts.)
          <p>
            <b>Why I don’t believe in forgiveness</b>
          </p>
          <p>
            Imagine lending your car to a friend who then proceeds to wreck it by 
            driving off the road into a telephone pole.  Your friend walks away with 
            minor injuries, but your car is toast.   Your friend is sorry and she 
            apologizes profusely.  She asks for forgiveness.  You are curious as to 
            why the accident happened.  Was your friend driving recklessly, was she drunk, 
            was she high, was she sleep-deprived?  Now suppose it turns out that the accident 
            was caused by a previously undetected brain tumor that at the last minute 
            impinged up a certain part of the brain causing your friend to experience a seizure.
          </p>
          <p>
            In such a case, forgiveness is not even an issue, for your friend did nothing wrong.  
            She just happened to be the victim of bad luck.  (Her bad luck goes way beyond destroying 
            your car.)  You also were the victim of bad luck.  No one is at fault.  
            As a result, no one needs to be forgiven.
          </p>
          <p>
            Here is the thing though.  What applies to your friend applies to everyone.  
            It would be true if your friend got into the accident by reckless driving, 
            drunk driving, driving high, driving without sleep, whatever.  Every action 
            is the product of a chain of causation that began long before anyone was born.  
            The result is that no one could have done otherwise than what they did.  
            In effect, free will is just an illusion.  All of our actions are determined.  
            True, we may sometimes be able to do what we want, but our wants are completely 
            also completely determined by a chain of causal factors that existed before we 
            were ever born.
          </p>
          <p>
            This notion is called afreeism.  Freeism is the belief in free will.  
            Afreeism is the lack of such a belief. A lack of free will has 
            profound consequences.  It means that no one deserves anything ever.  
            We do not deserve praise or rewards for good behavior, nor punishment 
            or blame for bad behavior.  I am not saying that we should never praise, 
            reward, punish, or blame.  Just that we should never do so on the basis 
            of deservedness.  For example, we may punish to deter.  
            We should not punish, however, on the basis that someone deserves it.
          </p>
          <p>
            The origins of afreeism go back thousands of years and the implications 
            are profound.  Those who accept afreeism as the best description of the 
            universe are more likely to support social policies that are more humane 
            and effective, to be more accepting of other people and how they act, and 
            to be more accepting of themselves.  The afreeist perspective dispenses 
            with guilt, blame, regret and remorse, thereby removing impediments to human happiness.
          </p>
          <p>
            The afreeist perspective means that forgiveness is never necessary 
            because no one is ever at fault.  Since the person driving your 
            car could not have done otherwise than wreck it, it makes no sense 
            to blame her, even if she was drunk, high, reckless, or lacking sleep.  
            Yes, one can communicate to her that her behavior (say, drunk driving) 
            is not appropriate, and yes, she should probably compensate you for 
            the damage to your car.  (This will provide an incentive against drunk 
            driving in the future.)  But asking for forgiveness makes no sense.  
            What happened was a simple result of a complex causal change that 
            began long before she was even born.  To what extent then could she 
            be morally responsible for what happened?  And why then does she need 
            to be forgiven?
          </p>
          <p>
            These comments just scratch the surface of afreeism.  Those who are intrigued 
            by afreeism and wish to explore it further should click on the What Is Afreeism
            link above.  And please let me know what you think.
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

</style>
