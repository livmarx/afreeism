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
          <p class="PageTitle">What Is Afreeism?</p>
      </div>
      <div class="TopMen">
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Explore'}">What Is Afreeism?</routerLink></div>
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Who_Are_We'}">Who Are We?</routerLink></div>
      </div>
      <div class="Main">
        <p>
              Afreeism is not a new idea.  Its roots go back thousands of years.
     This website provides two ways to explore the ideas and ideals of afreeism.
     
    <p>
      <b>The Afreeist Handbook</b>
    </p>
    <p> The most comprehensive way to introduce oneself to afreeism is by reading
     the Afreeist Handbook.  The Handbook explains why free will is an illusion, 
     discusses how this affects personal autonomy and moral responsibility, 
     explores the history of afreeism,
     examines the social policy implications, 
     and explores how afreeism can change our personal lives for the better.
     </p>
    <p>
       You can read the Afreeist Handbook 
         <a href="Afreeist_Handbook.pdf">here.</a>
      </p>
    <p> 
      You can download the Afreeist Handbook <a href="Afreeist_Handbook.pdf" download>here</a>.  
    </p>
    <p>Since afreeism is based on science and reason, we do not claim a monopoly on truth.  This is a way of saying that
      we really appreciate any comments or critiques on the Afreeist Handbook.  Comments should be sent to 
         Stephen Marks at smarks@bu.edu.
    </p>
    <p>
      <b>The Web Tutorial</b>
    </p>
    <p>
      The web tutorial provides a quicker introduction into the ideas and ideals of afreeism.  The web tutorial can
      be accessed <routerLink :to="{name: 'Contents'}">here</routerLink>.

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
  name: 'Explore',
};
</script>
<style scoped>
p {text-align:left;}
</style>
