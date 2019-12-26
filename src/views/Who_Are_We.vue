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
          <p class="PageTitle">Who Are We?</p>
      </div>
      <div class="TopMen">
        <div style="font-size:18px; padding:10px 30px;">
          <routerLink :to="{name: 'Explore'}">What Is Afreeism?</routerLink>
        </div>
        <div style="font-size:18px; padding:10px 30px;">
          <routerLink :to="{name: 'Who_Are_We'}">Who Are We?</routerLink>
        </div>
      </div>
      <div class="Main">
        <p>
            <b>Who are we?</b>
    </p>    
    <p>
      The Afreeist Society is a collection of individuals interested in the ideas and ideals
      of afreeism.  The goals of the Afreeist Society are:
    </p>   
    <p>
    a. To explain afreeism.
    </p>
    <p>
    b. To stimulate thinking and research about afreeism.
    </p>   
    <p>
      c. To promote the values and ideals of afreeism.
    </p> 
    <p>
      <b>How can I learn more about afreesim?</b>
    </p>

    <p>
      If you
      wish to explore these ideas, a good starting point is the Afreeist Handbook which you can find
      <routerLink :to="{name: 'Explore'}">here</routerLink>.  The Handbook explains why free will is an illusion,
      discusses how this affects personal autonomy and moral responsibility, explores the history of afreeism (the roots go back
      several thousand years), examines the social policy implications, and explores how afreeism can change our personal lives for the better. 

        </p>
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
  name: 'Who_Are_We',
};
</script>
<style>
</style>
