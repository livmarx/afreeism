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
          <span class="PageTitle">Afreeism Web Tutorial</span>
          <span>(Under Construction)</span>
      </div>
      <div class="TopMen">
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Explore'}">What Is Afreeism?</routerLink></div>
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Who_Are_We'}">Who Are We?</routerLink></div>
      </div>
      <div class="Main">           
        <h1 style="font-size:18px; background-color:inherit">The Three Pillars of Afreeism</h1>
        <p>
        This tutorial is organized into three areas.  The first is the basics of afreeism, the second
        is the social policy implications of afreeism, and the third is the potential impact of afreeism
        on one's life.  The reader is advised to explore these topics in that order.
        </p>
        <div class="Contents">
        <div>
          <b>The Basics of Afreeism</b> 
          <br />The Illusion of Free Will  
          <br />Personal Autonomy
          <br />Moral Responsibility     
        </div>
        <div>
          <b>Afreeist Social Policy</b>
          <br />Principles of Afreeist Social Policy  
          <br />No-Fault Crime and Punishment
          <br />Wealth and Poverty 
          <br />Freedom
          <br />Immigration
          <br />Affirmative Action
        </div>
        <div>
          <b>Personal Afreeism</b> 
          <br />Humility and Wonder
          <br />Tolerance
          <br />Self-Acceptance
          <br />Activism
          <br />Resiliance
          <br />The Meaning of Life       
        </div>
    </div>
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
  name: 'Contents',
};
</script>
<style>
</style>
