


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=10">
        <title>jQuery-MD5/jquery.md5.js at master · placemarker/jQuery-MD5</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe127-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (0e75de19f8) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4C15765F:0BB8:82C7B02:5289BDC7" name="octolytics-dimension-request_id" /><meta content="2347889" name="octolytics-actor-id" /><meta content="sauyon" name="octolytics-actor-login" /><meta content="4a838284400341114692fbf2f2cdd5b4a0177ecf4345dd075b4fcbdd1724d1f2" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="SHZuYtcldGWur0toA+ukhdWmrCmEdvr3bYH4MAWYkYU=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-09acd31812af6ce17b5f432a7597c5849393330e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-5b4d8641506c5981c2f001f2dffc0306b44491c2.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-bca527bb59d94c16d6bf2a759779d7953fa41e76.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-24f11604091c33b9686ff315cd7d46a5aa9712a7.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="d73cf633e128aec1e0702abcc0e1de33">

        <link data-pjax-transient rel='permalink' href='/placemarker/jQuery-MD5/blob/b985fce4e867773e5fb7a29b4fb5df74c53595d0/jquery.md5.js'>
  <meta property="og:title" content="jQuery-MD5"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/placemarker/jQuery-MD5"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jQuery-MD5 - JavaScript MD5 plugin, usable as part of the jQuery library or standalone"/>

  <meta name="description" content="jQuery-MD5 - JavaScript MD5 plugin, usable as part of the jQuery library or standalone" />

  <meta content="685579" name="octolytics-dimension-user_id" /><meta content="placemarker" name="octolytics-dimension-user_login" /><meta content="1897618" name="octolytics-dimension-repository_id" /><meta content="placemarker/jQuery-MD5" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1897618" name="octolytics-dimension-repository_network_root_id" /><meta content="placemarker/jQuery-MD5" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/placemarker/jQuery-MD5/commits/master.atom" rel="alternate" title="Recent Commits to jQuery-MD5:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public  page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have unread notifications">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="sauyon"
      data-repo="placemarker/jQuery-MD5"
      data-branch="master"
      data-sha="60d86fe9a0505048dbd89a85ee559b33e5ca3555"
  >

    <input type="hidden" name="nwo" value="placemarker/jQuery-MD5" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/sauyon" class="name">
        <img height="20" src="https://0.gravatar.com/avatar/5cf38170b787fd5e7df8116d997c9251?d=https%3A%2F%2Fidenticons.github.com%2F57c33037d418980527942ba8894661fd.png&amp;r=x&amp;s=140" width="20" /> sauyon
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="SHZuYtcldGWur0toA+ukhdWmrCmEdvr3bYH4MAWYkYU=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1897618" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/placemarker/jQuery-MD5/watchers">
        1
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/placemarker/jQuery-MD5/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/placemarker/jQuery-MD5/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/placemarker/jQuery-MD5/stargazers">
        50
      </a>
  </div>

  </li>


        <li>
          <a href="/placemarker/jQuery-MD5/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/placemarker/jQuery-MD5/network" class="social-count">44</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/placemarker" class="url fn" itemprop="url" rel="author"><span itemprop="title">placemarker</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/placemarker/jQuery-MD5" class="js-current-repository js-repo-home-link">jQuery-MD5</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/placemarker/jQuery-MD5" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /placemarker/jQuery-MD5">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


      <li class="tooltipped leftwards" title="Pull Requests"><a href="/placemarker/jQuery-MD5/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /placemarker/jQuery-MD5/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/placemarker/jQuery-MD5/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /placemarker/jQuery-MD5/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/placemarker/jQuery-MD5/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /placemarker/jQuery-MD5/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/placemarker/jQuery-MD5/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /placemarker/jQuery-MD5/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/placemarker/jQuery-MD5.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/placemarker/jQuery-MD5.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:placemarker/jQuery-MD5.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:placemarker/jQuery-MD5.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/placemarker/jQuery-MD5" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/placemarker/jQuery-MD5" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/placemarker/jQuery-MD5/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:3d3d47841e1670b1ec585f3e0c28f219 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/placemarker/jQuery-MD5/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/placemarker/jQuery-MD5/blob/master/jquery.md5.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/placemarker/jQuery-MD5" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jQuery-MD5</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.md5.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.md5.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/188943e53857bfaca6a5cf4328866e5d?d=https%3A%2F%2Fidenticons.github.com%2Fdd5069279e54427380175523930f18da.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/blueimp" rel="author">blueimp</a></span>
    <time class="js-relative-date" datetime="2011-06-13T07:34:58-07:00" title="2011-06-13 07:34:58">June 13, 2011</time>
    <div class="commit-title">
        <a href="/placemarker/jQuery-MD5/commit/b985fce4e867773e5fb7a29b4fb5df74c53595d0" class="message" data-pjax="true" title="JSLint compliance update.">JSLint compliance update.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/188943e53857bfaca6a5cf4328866e5d?d=https%3A%2F%2Fidenticons.github.com%2Fdd5069279e54427380175523930f18da.png&amp;r=x&amp;s=140" width="24" />
            <a href="/blueimp">blueimp</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>269 lines (247 sloc)</span>
        <span>9.606 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/placemarker/jQuery-MD5/edit/master/jquery.md5.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/placemarker/jQuery-MD5/raw/master/jquery.md5.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/placemarker/jQuery-MD5/blame/master/jquery.md5.js" class="button minibutton ">Blame</a>
          <a href="/placemarker/jQuery-MD5/commits/master/jquery.md5.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/placemarker/jQuery-MD5/delete/master/jquery.md5.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * jQuery MD5 Plugin 1.2.1</span></div><div class='line' id='LC3'><span class="cm"> * https://github.com/blueimp/jQuery-MD5</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2010, Sebastian Tschan</span></div><div class='line' id='LC6'><span class="cm"> * https://blueimp.net</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> * Licensed under the MIT license:</span></div><div class='line' id='LC9'><span class="cm"> * http://creativecommons.org/licenses/MIT/</span></div><div class='line' id='LC10'><span class="cm"> * </span></div><div class='line' id='LC11'><span class="cm"> * Based on</span></div><div class='line' id='LC12'><span class="cm"> * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message</span></div><div class='line' id='LC13'><span class="cm"> * Digest Algorithm, as defined in RFC 1321.</span></div><div class='line' id='LC14'><span class="cm"> * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009</span></div><div class='line' id='LC15'><span class="cm"> * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet</span></div><div class='line' id='LC16'><span class="cm"> * Distributed under the BSD License</span></div><div class='line' id='LC17'><span class="cm"> * See http://pajhome.org.uk/crypt/md5 for more info.</span></div><div class='line' id='LC18'><span class="cm"> */</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><span class="cm">/*jslint bitwise: true */</span></div><div class='line' id='LC21'><span class="cm">/*global unescape, jQuery */</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC27'><span class="cm">    * Add integers, wrapping at 2^32. This uses 16-bit operations internally</span></div><div class='line' id='LC28'><span class="cm">    * to work around bugs in some JS interpreters.</span></div><div class='line' id='LC29'><span class="cm">    */</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">safe_add</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">lsw</span> <span class="o">=</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">y</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">),</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msw</span> <span class="o">=</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&gt;&gt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">y</span> <span class="o">&gt;&gt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">lsw</span> <span class="o">&gt;&gt;</span> <span class="mi">16</span><span class="p">);</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">msw</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">lsw</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">);</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC37'><span class="cm">    * Bitwise rotate a 32-bit number to the left.</span></div><div class='line' id='LC38'><span class="cm">    */</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">bit_rol</span><span class="p">(</span><span class="nx">num</span><span class="p">,</span> <span class="nx">cnt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">num</span> <span class="o">&lt;&lt;</span> <span class="nx">cnt</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">num</span> <span class="o">&gt;&gt;&gt;</span> <span class="p">(</span><span class="mi">32</span> <span class="o">-</span> <span class="nx">cnt</span><span class="p">));</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC44'><span class="cm">    * These functions implement the four basic operations the algorithm uses.</span></div><div class='line' id='LC45'><span class="cm">    */</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">md5_cmn</span><span class="p">(</span><span class="nx">q</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">safe_add</span><span class="p">(</span><span class="nx">bit_rol</span><span class="p">(</span><span class="nx">safe_add</span><span class="p">(</span><span class="nx">safe_add</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">q</span><span class="p">),</span> <span class="nx">safe_add</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">t</span><span class="p">)),</span> <span class="nx">s</span><span class="p">),</span> <span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">md5_cmn</span><span class="p">((</span><span class="nx">b</span> <span class="o">&amp;</span> <span class="nx">c</span><span class="p">)</span> <span class="o">|</span> <span class="p">((</span><span class="o">~</span><span class="nx">b</span><span class="p">)</span> <span class="o">&amp;</span> <span class="nx">d</span><span class="p">),</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">md5_cmn</span><span class="p">((</span><span class="nx">b</span> <span class="o">&amp;</span> <span class="nx">d</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">c</span> <span class="o">&amp;</span> <span class="p">(</span><span class="o">~</span><span class="nx">d</span><span class="p">)),</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">md5_cmn</span><span class="p">(</span><span class="nx">b</span> <span class="o">^</span> <span class="nx">c</span> <span class="o">^</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">md5_cmn</span><span class="p">(</span><span class="nx">c</span> <span class="o">^</span> <span class="p">(</span><span class="nx">b</span> <span class="o">|</span> <span class="p">(</span><span class="o">~</span><span class="nx">d</span><span class="p">)),</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">s</span><span class="p">,</span> <span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC63'><span class="cm">    * Calculate the MD5 of an array of little-endian words, and a bit length.</span></div><div class='line' id='LC64'><span class="cm">    */</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">binl_md5</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">len</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* append padding */</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span><span class="p">[</span><span class="nx">len</span> <span class="o">&gt;&gt;</span> <span class="mi">5</span><span class="p">]</span> <span class="o">|=</span> <span class="mh">0x80</span> <span class="o">&lt;&lt;</span> <span class="p">((</span><span class="nx">len</span><span class="p">)</span> <span class="o">%</span> <span class="mi">32</span><span class="p">);</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span><span class="p">[(((</span><span class="nx">len</span> <span class="o">+</span> <span class="mi">64</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">9</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">4</span><span class="p">)</span> <span class="o">+</span> <span class="mi">14</span><span class="p">]</span> <span class="o">=</span> <span class="nx">len</span><span class="p">;</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">olda</span><span class="p">,</span> <span class="nx">oldb</span><span class="p">,</span> <span class="nx">oldc</span><span class="p">,</span> <span class="nx">oldd</span><span class="p">,</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span>  <span class="mi">1732584193</span><span class="p">,</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="o">-</span><span class="mi">271733879</span><span class="p">,</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1732584194</span><span class="p">,</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span>  <span class="mi">271733878</span><span class="p">;</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">16</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">olda</span> <span class="o">=</span> <span class="nx">a</span><span class="p">;</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oldb</span> <span class="o">=</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oldc</span> <span class="o">=</span> <span class="nx">c</span><span class="p">;</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oldd</span> <span class="o">=</span> <span class="nx">d</span><span class="p">;</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span>       <span class="mi">7</span><span class="p">,</span> <span class="o">-</span><span class="mi">680876936</span><span class="p">);</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">1</span><span class="p">],</span> <span class="mi">12</span><span class="p">,</span> <span class="o">-</span><span class="mi">389564586</span><span class="p">);</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">2</span><span class="p">],</span> <span class="mi">17</span><span class="p">,</span>  <span class="mi">606105819</span><span class="p">);</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">3</span><span class="p">],</span> <span class="mi">22</span><span class="p">,</span> <span class="o">-</span><span class="mi">1044525330</span><span class="p">);</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">4</span><span class="p">],</span>  <span class="mi">7</span><span class="p">,</span> <span class="o">-</span><span class="mi">176418897</span><span class="p">);</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">5</span><span class="p">],</span> <span class="mi">12</span><span class="p">,</span>  <span class="mi">1200080426</span><span class="p">);</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">6</span><span class="p">],</span> <span class="mi">17</span><span class="p">,</span> <span class="o">-</span><span class="mi">1473231341</span><span class="p">);</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">7</span><span class="p">],</span> <span class="mi">22</span><span class="p">,</span> <span class="o">-</span><span class="mi">45705983</span><span class="p">);</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">8</span><span class="p">],</span>  <span class="mi">7</span><span class="p">,</span>  <span class="mi">1770035416</span><span class="p">);</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">9</span><span class="p">],</span> <span class="mi">12</span><span class="p">,</span> <span class="o">-</span><span class="mi">1958414417</span><span class="p">);</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">10</span><span class="p">],</span> <span class="mi">17</span><span class="p">,</span> <span class="o">-</span><span class="mi">42063</span><span class="p">);</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">11</span><span class="p">],</span> <span class="mi">22</span><span class="p">,</span> <span class="o">-</span><span class="mi">1990404162</span><span class="p">);</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">12</span><span class="p">],</span>  <span class="mi">7</span><span class="p">,</span>  <span class="mi">1804603682</span><span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">13</span><span class="p">],</span> <span class="mi">12</span><span class="p">,</span> <span class="o">-</span><span class="mi">40341101</span><span class="p">);</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">14</span><span class="p">],</span> <span class="mi">17</span><span class="p">,</span> <span class="o">-</span><span class="mi">1502002290</span><span class="p">);</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_ff</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">15</span><span class="p">],</span> <span class="mi">22</span><span class="p">,</span>  <span class="mi">1236535329</span><span class="p">);</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">1</span><span class="p">],</span>  <span class="mi">5</span><span class="p">,</span> <span class="o">-</span><span class="mi">165796510</span><span class="p">);</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">6</span><span class="p">],</span>  <span class="mi">9</span><span class="p">,</span> <span class="o">-</span><span class="mi">1069501632</span><span class="p">);</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">11</span><span class="p">],</span> <span class="mi">14</span><span class="p">,</span>  <span class="mi">643717713</span><span class="p">);</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span>      <span class="mi">20</span><span class="p">,</span> <span class="o">-</span><span class="mi">373897302</span><span class="p">);</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">5</span><span class="p">],</span>  <span class="mi">5</span><span class="p">,</span> <span class="o">-</span><span class="mi">701558691</span><span class="p">);</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">10</span><span class="p">],</span>  <span class="mi">9</span><span class="p">,</span>  <span class="mi">38016083</span><span class="p">);</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">15</span><span class="p">],</span> <span class="mi">14</span><span class="p">,</span> <span class="o">-</span><span class="mi">660478335</span><span class="p">);</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">4</span><span class="p">],</span> <span class="mi">20</span><span class="p">,</span> <span class="o">-</span><span class="mi">405537848</span><span class="p">);</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">9</span><span class="p">],</span>  <span class="mi">5</span><span class="p">,</span>  <span class="mi">568446438</span><span class="p">);</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">14</span><span class="p">],</span>  <span class="mi">9</span><span class="p">,</span> <span class="o">-</span><span class="mi">1019803690</span><span class="p">);</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">3</span><span class="p">],</span> <span class="mi">14</span><span class="p">,</span> <span class="o">-</span><span class="mi">187363961</span><span class="p">);</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">8</span><span class="p">],</span> <span class="mi">20</span><span class="p">,</span>  <span class="mi">1163531501</span><span class="p">);</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">13</span><span class="p">],</span>  <span class="mi">5</span><span class="p">,</span> <span class="o">-</span><span class="mi">1444681467</span><span class="p">);</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">2</span><span class="p">],</span>  <span class="mi">9</span><span class="p">,</span> <span class="o">-</span><span class="mi">51403784</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">7</span><span class="p">],</span> <span class="mi">14</span><span class="p">,</span>  <span class="mi">1735328473</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_gg</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">12</span><span class="p">],</span> <span class="mi">20</span><span class="p">,</span> <span class="o">-</span><span class="mi">1926607734</span><span class="p">);</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">5</span><span class="p">],</span>  <span class="mi">4</span><span class="p">,</span> <span class="o">-</span><span class="mi">378558</span><span class="p">);</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">8</span><span class="p">],</span> <span class="mi">11</span><span class="p">,</span> <span class="o">-</span><span class="mi">2022574463</span><span class="p">);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">11</span><span class="p">],</span> <span class="mi">16</span><span class="p">,</span>  <span class="mi">1839030562</span><span class="p">);</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">14</span><span class="p">],</span> <span class="mi">23</span><span class="p">,</span> <span class="o">-</span><span class="mi">35309556</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">1</span><span class="p">],</span>  <span class="mi">4</span><span class="p">,</span> <span class="o">-</span><span class="mi">1530992060</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">4</span><span class="p">],</span> <span class="mi">11</span><span class="p">,</span>  <span class="mi">1272893353</span><span class="p">);</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">7</span><span class="p">],</span> <span class="mi">16</span><span class="p">,</span> <span class="o">-</span><span class="mi">155497632</span><span class="p">);</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">10</span><span class="p">],</span> <span class="mi">23</span><span class="p">,</span> <span class="o">-</span><span class="mi">1094730640</span><span class="p">);</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">13</span><span class="p">],</span>  <span class="mi">4</span><span class="p">,</span>  <span class="mi">681279174</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span>      <span class="mi">11</span><span class="p">,</span> <span class="o">-</span><span class="mi">358537222</span><span class="p">);</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">3</span><span class="p">],</span> <span class="mi">16</span><span class="p">,</span> <span class="o">-</span><span class="mi">722521979</span><span class="p">);</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">6</span><span class="p">],</span> <span class="mi">23</span><span class="p">,</span>  <span class="mi">76029189</span><span class="p">);</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">9</span><span class="p">],</span>  <span class="mi">4</span><span class="p">,</span> <span class="o">-</span><span class="mi">640364487</span><span class="p">);</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">12</span><span class="p">],</span> <span class="mi">11</span><span class="p">,</span> <span class="o">-</span><span class="mi">421815835</span><span class="p">);</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">15</span><span class="p">],</span> <span class="mi">16</span><span class="p">,</span>  <span class="mi">530742520</span><span class="p">);</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_hh</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">2</span><span class="p">],</span> <span class="mi">23</span><span class="p">,</span> <span class="o">-</span><span class="mi">995338651</span><span class="p">);</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span>       <span class="mi">6</span><span class="p">,</span> <span class="o">-</span><span class="mi">198630844</span><span class="p">);</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">7</span><span class="p">],</span> <span class="mi">10</span><span class="p">,</span>  <span class="mi">1126891415</span><span class="p">);</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">14</span><span class="p">],</span> <span class="mi">15</span><span class="p">,</span> <span class="o">-</span><span class="mi">1416354905</span><span class="p">);</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">5</span><span class="p">],</span> <span class="mi">21</span><span class="p">,</span> <span class="o">-</span><span class="mi">57434055</span><span class="p">);</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">12</span><span class="p">],</span>  <span class="mi">6</span><span class="p">,</span>  <span class="mi">1700485571</span><span class="p">);</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">3</span><span class="p">],</span> <span class="mi">10</span><span class="p">,</span> <span class="o">-</span><span class="mi">1894986606</span><span class="p">);</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">10</span><span class="p">],</span> <span class="mi">15</span><span class="p">,</span> <span class="o">-</span><span class="mi">1051523</span><span class="p">);</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">1</span><span class="p">],</span> <span class="mi">21</span><span class="p">,</span> <span class="o">-</span><span class="mi">2054922799</span><span class="p">);</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">8</span><span class="p">],</span>  <span class="mi">6</span><span class="p">,</span>  <span class="mi">1873313359</span><span class="p">);</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">15</span><span class="p">],</span> <span class="mi">10</span><span class="p">,</span> <span class="o">-</span><span class="mi">30611744</span><span class="p">);</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">6</span><span class="p">],</span> <span class="mi">15</span><span class="p">,</span> <span class="o">-</span><span class="mi">1560198380</span><span class="p">);</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">13</span><span class="p">],</span> <span class="mi">21</span><span class="p">,</span>  <span class="mi">1309151649</span><span class="p">);</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">4</span><span class="p">],</span>  <span class="mi">6</span><span class="p">,</span> <span class="o">-</span><span class="mi">145523070</span><span class="p">);</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">11</span><span class="p">],</span> <span class="mi">10</span><span class="p">,</span> <span class="o">-</span><span class="mi">1120210379</span><span class="p">);</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">2</span><span class="p">],</span> <span class="mi">15</span><span class="p">,</span>  <span class="mi">718787259</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">md5_ii</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span>  <span class="mi">9</span><span class="p">],</span> <span class="mi">21</span><span class="p">,</span> <span class="o">-</span><span class="mi">343485551</span><span class="p">);</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">safe_add</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">olda</span><span class="p">);</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">safe_add</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">oldb</span><span class="p">);</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span> <span class="o">=</span> <span class="nx">safe_add</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">oldc</span><span class="p">);</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nx">safe_add</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">oldd</span><span class="p">);</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">];</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC159'><span class="cm">    * Convert an array of little-endian words to a string</span></div><div class='line' id='LC160'><span class="cm">    */</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">binl2rstr</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">32</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">((</span><span class="nx">input</span><span class="p">[</span><span class="nx">i</span> <span class="o">&gt;&gt;</span> <span class="mi">5</span><span class="p">]</span> <span class="o">&gt;&gt;&gt;</span> <span class="p">(</span><span class="nx">i</span> <span class="o">%</span> <span class="mi">32</span><span class="p">))</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">);</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC171'><span class="cm">    * Convert a raw string to an array of little-endian words</span></div><div class='line' id='LC172'><span class="cm">    * Characters &gt;255 have their high-byte silently ignored.</span></div><div class='line' id='LC173'><span class="cm">    */</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">rstr2binl</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">[(</span><span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;&gt;</span> <span class="mi">2</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">output</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">[</span><span class="nx">i</span> <span class="o">&gt;&gt;</span> <span class="mi">5</span><span class="p">]</span> <span class="o">|=</span> <span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">/</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="p">(</span><span class="nx">i</span> <span class="o">%</span> <span class="mi">32</span><span class="p">);</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC188'><span class="cm">    * Calculate the MD5 of a raw string</span></div><div class='line' id='LC189'><span class="cm">    */</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">rstr_md5</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">binl2rstr</span><span class="p">(</span><span class="nx">binl_md5</span><span class="p">(</span><span class="nx">rstr2binl</span><span class="p">(</span><span class="nx">s</span><span class="p">),</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">));</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC195'><span class="cm">    * Calculate the HMAC-MD5, of a key and some data (raw strings)</span></div><div class='line' id='LC196'><span class="cm">    */</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">rstr_hmac_md5</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bkey</span> <span class="o">=</span> <span class="nx">rstr2binl</span><span class="p">(</span><span class="nx">key</span><span class="p">),</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ipad</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">opad</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hash</span><span class="p">;</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ipad</span><span class="p">[</span><span class="mi">15</span><span class="p">]</span> <span class="o">=</span> <span class="nx">opad</span><span class="p">[</span><span class="mi">15</span><span class="p">]</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span>                        </div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">bkey</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">16</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bkey</span> <span class="o">=</span> <span class="nx">binl_md5</span><span class="p">(</span><span class="nx">bkey</span><span class="p">,</span> <span class="nx">key</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">);</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">16</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ipad</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bkey</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">^</span> <span class="mh">0x36363636</span><span class="p">;</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">opad</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bkey</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">^</span> <span class="mh">0x5C5C5C5C</span><span class="p">;</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hash</span> <span class="o">=</span> <span class="nx">binl_md5</span><span class="p">(</span><span class="nx">ipad</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">rstr2binl</span><span class="p">(</span><span class="nx">data</span><span class="p">)),</span> <span class="mi">512</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">);</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">binl2rstr</span><span class="p">(</span><span class="nx">binl_md5</span><span class="p">(</span><span class="nx">opad</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">hash</span><span class="p">),</span> <span class="mi">512</span> <span class="o">+</span> <span class="mi">128</span><span class="p">));</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC216'><span class="cm">    * Convert a raw string to a hex string</span></div><div class='line' id='LC217'><span class="cm">    */</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">rstr2hex</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hex_tab</span> <span class="o">=</span> <span class="s1">&#39;0123456789abcdef&#39;</span><span class="p">,</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span><span class="p">,</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span> <span class="o">+=</span> <span class="nx">hex_tab</span><span class="p">.</span><span class="nx">charAt</span><span class="p">((</span><span class="nx">x</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">4</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0x0F</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hex_tab</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">x</span> <span class="o">&amp;</span> <span class="mh">0x0F</span><span class="p">);</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC232'><span class="cm">    * Encode a string as utf-8</span></div><div class='line' id='LC233'><span class="cm">    */</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">unescape</span><span class="p">(</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">input</span><span class="p">));</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC239'><span class="cm">    * Take string arguments and return either raw or hex encoded strings</span></div><div class='line' id='LC240'><span class="cm">    */</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">raw_md5</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rstr_md5</span><span class="p">(</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">s</span><span class="p">));</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">hex_md5</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rstr2hex</span><span class="p">(</span><span class="nx">raw_md5</span><span class="p">(</span><span class="nx">s</span><span class="p">));</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">raw_hmac_md5</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rstr_hmac_md5</span><span class="p">(</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">k</span><span class="p">),</span> <span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">d</span><span class="p">));</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">hex_hmac_md5</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rstr2hex</span><span class="p">(</span><span class="nx">raw_hmac_md5</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">d</span><span class="p">));</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">md5</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">raw</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">raw</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hex_md5</span><span class="p">(</span><span class="nx">string</span><span class="p">);</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">raw_md5</span><span class="p">(</span><span class="nx">string</span><span class="p">);</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">raw</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hex_hmac_md5</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">string</span><span class="p">);</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">raw_hmac_md5</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">string</span><span class="p">);</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC269'><span class="p">}(</span><span class="k">typeof</span> <span class="nx">jQuery</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">?</span> <span class="nx">jQuery</span> <span class="o">:</span> <span class="k">this</span><span class="p">));</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.08838s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/placemarker/jQuery-MD5/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

