<template>
  <div class="home">
    <div class="ASTitle">
      The Afreeist Society
      <div>Web Tutorial</div>
    </div>
    <div class="TopMenu">
      <div><routerLink :to="{name: 'Home'}">Home</routerLink></div>
      <div><routerLink :to="{name: 'Explore'}">Explore Afreeism</routerLink></div>
      <div><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
      <div><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      <div><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
    </div>
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
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Contents2',
};
</script>
<style>
</style>
