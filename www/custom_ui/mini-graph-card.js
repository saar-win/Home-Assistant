





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-dsqgdBtnWun6oxDg9q1xezEyITXQ8QsMdFm+JDoDk6Tzx9AEE1XcUEhWff/M2Jv85ucTVJCjp/2fGbh6Omtrgg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-41c2037bf12f1e46d8f08b88a04a8d8f.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-MRlTIqIyb8caK5+o8llXVntXovciHyAM4qE3kWU2S7SIjAPDxYp4mE0jQp4kP5UYegy+lG9y1I6VlsdzEjb5Qw==" rel="stylesheet" href="https://github.githubassets.com/assets/site-294181adec18ed639e160b96b45d17ac.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-laSfoi4gdhl6Kk1KvWW1HJ1mn6jL6UFhXicUQFZzdrCHxxMOR7LzishtoFm1VYZGrsQNot/c/ygUXDR0wI1p7A==" rel="stylesheet" href="https://github.githubassets.com/assets/github-f903efdb4f13a3360e0e453a10f271c0.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>home-assistant/mini-graph-card.js at master · DavidFW1960/home-assistant · GitHub</title>
    <meta name="description" content="David&#39;s Home Assistant. Contribute to DavidFW1960/home-assistant development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/36390762?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="DavidFW1960/home-assistant" /><meta name="twitter:description" content="David&#39;s Home Assistant. Contribute to DavidFW1960/home-assistant development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/36390762?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="DavidFW1960/home-assistant" /><meta property="og:url" content="https://github.com/DavidFW1960/home-assistant" /><meta property="og:description" content="David&#39;s Home Assistant. Contribute to DavidFW1960/home-assistant development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="F855:22BC5:14CF494:1FAA961:5D04047F" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="F855:22BC5:14CF494:1FAA961:5D04047F" /><meta name="octolytics-dimension-region_edge" content="ams" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NGE3OWFmOGNmNTY3ZjlkM2Q2ZTVmODE4MzIwM2UxZThmMDU3YTAzMzgxZWVkYzcwYWI2MDdkMDhjNjQxYzliZnx7InJlbW90ZV9hZGRyZXNzIjoiMTA5LjY0LjIzOS4xMDYiLCJyZXF1ZXN0X2lkIjoiRjg1NToyMkJDNToxNENGNDk0OjFGQUE5NjE6NUQwNDA0N0YiLCJ0aW1lc3RhbXAiOjE1NjA1NDQzODcsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS">

  <meta name="html-safe-nonce" content="b0c622b799a236c83cbb6d27d05f5392f9078079">

  <meta http-equiv="x-pjax-version" content="b7b7b47dab22a08861ddceb3df968563">
  

      <link href="https://github.com/DavidFW1960/home-assistant/commits/master.atom" rel="alternate" title="Recent Commits to home-assistant:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/DavidFW1960/home-assistant git https://github.com/DavidFW1960/home-assistant.git">

  <meta name="octolytics-dimension-user_id" content="36390762" /><meta name="octolytics-dimension-user_login" content="DavidFW1960" /><meta name="octolytics-dimension-repository_id" content="142546891" /><meta name="octolytics-dimension-repository_nwo" content="DavidFW1960/home-assistant" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="142546891" /><meta name="octolytics-dimension-repository_network_root_nwo" content="DavidFW1960/home-assistant" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/DavidFW1960/home-assistant/blob/master/www/community/mini-graph-card/mini-graph-card.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">





  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
  <div class="container-lg d-lg-flex flex-items-center p-responsive">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>

          <div class="d-lg-none css-truncate css-truncate-target width-fit p-2">
            
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/DavidFW1960">DavidFW1960</a>
    /
    <a class="Header-link" href="/DavidFW1960/home-assistant">home-assistant</a>


          </div>

        <div class="d-flex flex-items-center">
            <a href="/join?source=header-repo"
              class="d-inline-block d-lg-none f5 text-white no-underline border border-gray-dark rounded-2 px-2 py-1 mr-3 mr-sm-5"
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;2048902682.1554846624&quot;,&quot;originating_request_id&quot;:&quot;F855:22BC5:14CF494:1FAA961:5D04047F&quot;,&quot;originating_url&quot;:&quot;https://github.com/DavidFW1960/home-assistant/blob/master/www/community/mini-graph-card/mini-graph-card.js&quot;,&quot;referrer&quot;:&quot;https://github.com/DavidFW1960/home-assistant/tree/master/www/community/mini-graph-card&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="a2e1912643d62cc53c994adf483c9f1450ce49f5768f4d157b118b4835aaeba9"
              data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
              Sign&nbsp;up
            </a>

          <button class="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars text-white" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </button>
        </div>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-flex d-lg-none flex-justify-end border-bottom bg-gray-light p-3">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul class="d-lg-flex list-style-none">
              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features/actions" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a>
                          <li class="edge-item-fix"><a href="/features/package-registry" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Package Registry">Package registry</a>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#social-coding" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Social coding">Social coding</a></li>
                      <li class="edge-item-fix"><a href="/features#documentation" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Documentation">Documentation</a></li>
                      <li class="edge-item-fix"><a href="/features#code-hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Code hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/customer-stories" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                        <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="https://github.com/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <div class="d-lg-flex mb-3 mb-lg-0">
            <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="142546891" data-scoped-search-url="/DavidFW1960/home-assistant/search" data-unscoped-search-url="/search" action="/DavidFW1960/home-assistant/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=tN9KUjAwCIXy5pYvnNFfJmk8kwoK7T0u8T6ccsmlzmnSOjuBvKiPireaoUspjV3Iivux9CqiSo19sDYoO6Et9Q=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a href="/login?return_to=%2FDavidFW1960%2Fhome-assistant%2Fblob%2Fmaster%2Fwww%2Fcommunity%2Fmini-graph-card%2Fmini-graph-card.js"
          class="HeaderMenu-link no-underline mr-3"
          data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;2048902682.1554846624&quot;,&quot;originating_request_id&quot;:&quot;F855:22BC5:14CF494:1FAA961:5D04047F&quot;,&quot;originating_url&quot;:&quot;https://github.com/DavidFW1960/home-assistant/blob/master/www/community/mini-graph-card/mini-graph-card.js&quot;,&quot;referrer&quot;:&quot;https://github.com/DavidFW1960/home-assistant/tree/master/www/community/mini-graph-card&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b686f4c7eac6bd647a3e2bbc76b04ffa89e10da0a81bcc05aff3d02e0b646171"
          data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign&nbsp;in
        </a>
          <a href="/join?source=header-repo"
            class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"
            data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;2048902682.1554846624&quot;,&quot;originating_request_id&quot;:&quot;F855:22BC5:14CF494:1FAA961:5D04047F&quot;,&quot;originating_url&quot;:&quot;https://github.com/DavidFW1960/home-assistant/blob/master/www/community/mini-graph-card/mini-graph-card.js&quot;,&quot;referrer&quot;:&quot;https://github.com/DavidFW1960/home-assistant/tree/master/www/community/mini-graph-card&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b686f4c7eac6bd647a3e2bbc76b04ffa89e10da0a81bcc05aff3d02e0b646171"
            data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
            Sign&nbsp;up
          </a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  






  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
  <a class="tooltipped tooltipped-s btn btn-sm btn-with-count" aria-label="You must be signed in to watch a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;2048902682.1554846624&quot;,&quot;originating_request_id&quot;:&quot;F855:22BC5:14CF494:1FAA961:5D04047F&quot;,&quot;originating_url&quot;:&quot;https://github.com/DavidFW1960/home-assistant/blob/master/www/community/mini-graph-card/mini-graph-card.js&quot;,&quot;referrer&quot;:&quot;https://github.com/DavidFW1960/home-assistant/tree/master/www/community/mini-graph-card&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="a714633bd4eb74a2cca7b8662972995c028a36f2aac05f765f583c3de9214c3c" href="/login?return_to=%2FDavidFW1960%2Fhome-assistant">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
</a>    <a class="social-count" href="/DavidFW1960/home-assistant/watchers"
       aria-label="6 users are watching this repository">
      6
    </a>

  </li>

  <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:142546891,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;2048902682.1554846624&quot;,&quot;originating_request_id&quot;:&quot;F855:22BC5:14CF494:1FAA961:5D04047F&quot;,&quot;originating_url&quot;:&quot;https://github.com/DavidFW1960/home-assistant/blob/master/www/community/mini-graph-card/mini-graph-card.js&quot;,&quot;referrer&quot;:&quot;https://github.com/DavidFW1960/home-assistant/tree/master/www/community/mini-graph-card&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="e47382bf28459bfe29f62e65244a85d4fb933e7a1b47de12ab61c82b72849d95" href="/login?return_to=%2FDavidFW1960%2Fhome-assistant">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
</a>
    <a class="social-count js-social-count" href="/DavidFW1960/home-assistant/stargazers"
      aria-label="14 users starred this repository">
      14
    </a>

  </li>

  <li>
      <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:142546891,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;2048902682.1554846624&quot;,&quot;originating_request_id&quot;:&quot;F855:22BC5:14CF494:1FAA961:5D04047F&quot;,&quot;originating_url&quot;:&quot;https://github.com/DavidFW1960/home-assistant/blob/master/www/community/mini-graph-card/mini-graph-card.js&quot;,&quot;referrer&quot;:&quot;https://github.com/DavidFW1960/home-assistant/tree/master/www/community/mini-graph-card&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="178de534068a0b983bfa25ac45954138deddc6236c8910d4a5662a327c034c3c" href="/login?return_to=%2FDavidFW1960%2Fhome-assistant">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
</a>
    <a href="/DavidFW1960/home-assistant/network/members" class="social-count"
       aria-label="2 users forked this repository">
      2
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=36390762" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/DavidFW1960">DavidFW1960</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/DavidFW1960/home-assistant">home-assistant</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /DavidFW1960/home-assistant" href="/DavidFW1960/home-assistant">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /DavidFW1960/home-assistant/issues" href="/DavidFW1960/home-assistant/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /DavidFW1960/home-assistant/pulls" href="/DavidFW1960/home-assistant/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /DavidFW1960/home-assistant/projects" href="/DavidFW1960/home-assistant/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy /DavidFW1960/home-assistant/security/advisories" href="/DavidFW1960/home-assistant/security/advisories">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="octicon" height="16px" width="16px">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2l7-2 7 2v6.02C15 12.69 9.69 16 8 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L8 1l6 1.75v5.268C14 12.104 9.45 15 8 15c-1.45 0-6-2.896-6-6.982V2.75z"></path>
    <path d="M3 3.5L8 2v12c-1.207 0-5-2.482-5-5.985V3.5z"></path>
</svg>

      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /DavidFW1960/home-assistant/pulse" href="/DavidFW1960/home-assistant/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /DavidFW1960/home-assistant" href="/DavidFW1960/home-assistant">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /DavidFW1960/home-assistant/issues" href="/DavidFW1960/home-assistant/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /DavidFW1960/home-assistant/pulls" href="/DavidFW1960/home-assistant/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /DavidFW1960/home-assistant/projects" href="/DavidFW1960/home-assistant/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>


      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy /DavidFW1960/home-assistant/security/advisories" href="/DavidFW1960/home-assistant/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /DavidFW1960/home-assistant/pulse" href="/DavidFW1960/home-assistant/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>
<div class="container-lg new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/DavidFW1960/home-assistant/blob/09f326565b0db29da8f5c6f2e69e1a18db726119/www/community/mini-graph-card/mini-graph-card.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:dfc70c8ab0388afa3518d9032b937c0d -->
          <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/prompt_dismissals/signup" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="+vvlxjzgnWv9ue+aiJCxdml6+w2n7dbCIxPYrXNaO/ayzUj83TK9jptBOSMUeU2rpBIGrcy8BXxIOHJeqQYfdg==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;files signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;2048902682.1554846624&quot;,&quot;originating_request_id&quot;:&quot;F855:22BC5:14CF494:1FAA961:5D04047F&quot;,&quot;originating_url&quot;:&quot;https://github.com/DavidFW1960/home-assistant/blob/master/www/community/mini-graph-card/mini-graph-card.js&quot;,&quot;referrer&quot;:&quot;https://github.com/DavidFW1960/home-assistant/tree/master/www/community/mini-graph-card&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9be81f60ad112d9533a9c9fb1c0ea79b3132817dba4321fbd83ed56356913c74" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" href="/join?source=prompt-blob-show">Sign up</a>
        </div>
      </div>
    </div>


    <div class="d-flex flex-items-start flex-shrink-0 mb-2 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target">master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/DavidFW1960/home-assistant/ref-list/master/www/community/mini-graph-card/mini-graph-card.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/DavidFW1960/home-assistant/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="www/community/mini-graph-card/mini-graph-card.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/DavidFW1960/home-assistant"><span>home-assistant</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/DavidFW1960/home-assistant/tree/master/www"><span>www</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/DavidFW1960/home-assistant/tree/master/www/community"><span>community</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/DavidFW1960/home-assistant/tree/master/www/community/mini-graph-card"><span>mini-graph-card</span></a></span><span class="separator">/</span><strong class="final-path">mini-graph-card.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/DavidFW1960/home-assistant/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="www/community/mini-graph-card/mini-graph-card.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    <include-fragment src="/DavidFW1960/home-assistant/contributors/master/www/community/mini-graph-card/mini-graph-card.js" class="Box Box--condensed commit-loader">
      <div class="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div class="Box-body d-flex flex-items-center" >
          <img alt="" class="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>




    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">

  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">
      2 lines (1 sloc)
      <span class="file-info-divider"></span>
    74.5 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/DavidFW1960/home-assistant/raw/master/www/community/mini-graph-card/mini-graph-card.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/DavidFW1960/home-assistant/blame/master/www/community/mini-graph-card/mini-graph-card.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/DavidFW1960/home-assistant/commits/master/www/community/mini-graph-card/mini-graph-card.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw hide-sm"
               href="https://desktop.github.com"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>




      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(function(){&quot;use strict&quot;;function a(){const b=E([&quot;\n          &lt;div class=\&quot;info__item\&quot;&gt;\n            &lt;span class=\&quot;info__item__type\&quot;&gt;&quot;,&quot;&lt;/span&gt;\n            &lt;span class=\&quot;info__item__value\&quot;&gt;\n              &quot;,&quot; &quot;,&quot;\n            &lt;/span&gt;\n            &lt;span class=\&quot;info__item__time\&quot;&gt;\n              &quot;,&quot;\n            &lt;/span&gt;\n          &lt;/div&gt;\n        &quot;]);return a=function(){return b},b}function b(){const a=E([&quot;\n      &lt;div class=\&quot;info flex\&quot;&gt;\n        &quot;,&quot;\n      &lt;/div&gt;\n    &quot;]);return b=function(){return a},a}function c(){const a=E([&quot;\n      &lt;div class=\&quot;graph__labels flex\&quot;&gt;\n        &lt;span class=\&quot;label--max\&quot;&gt;&quot;,&quot;&lt;/span&gt;\n        &lt;span class=\&quot;label--min\&quot;&gt;&quot;,&quot;&lt;/span&gt;\n      &lt;/div&gt;\n    &quot;]);return c=function(){return a},a}function d(){const a=E([&quot;\n      &lt;svg width=&#39;100%&#39; height=&quot;,&quot; viewBox=&#39;0 0 500 &quot;,&quot;&#39;\n        @click=&quot;,&quot;&gt;\n        &lt;g&gt;\n          &lt;defs&gt;\n            &quot;,&quot;\n          &lt;/defs&gt;\n          &quot;,&quot;\n          &quot;,&quot;\n          &quot;,&quot;\n          &quot;,&quot;\n        &lt;/g&gt;\n        &quot;,&quot;\n      &lt;/svg&gt;&quot;]);return d=function(){return a},a}function e(){const a=E([&quot;&lt;g class=&#39;bars&#39; ?anim=&quot;,&quot;&gt;&quot;,&quot;&lt;/g&gt;&quot;]);return e=function(){return a},a}function f(){const a=E([&quot;\n        &lt;rect class=&#39;bar&#39; x=&quot;,&quot; y=&quot;,&quot;\n          height=&quot;,&quot; width=&quot;,&quot; fill=&quot;,&quot;\n          @mouseover=&quot;,&quot;\n          @mouseout=&quot;,&quot;&gt;\n          &quot;,&quot;\n        &lt;/rect&gt;&quot;]);return f=function(){return a},a}function g(){const a=E([&quot;\n          &lt;animate attributeName=&#39;y&#39; from=&quot;,&quot; to=&quot;,&quot; dur=&#39;1s&#39; fill=&#39;remove&#39;\n            calcMode=&#39;spline&#39; keyTimes=&#39;0; 1&#39; keySplines=&#39;0.215 0.61 0.355 1&#39;&gt;\n          &lt;/animate&gt;&quot;]);return g=function(){return a},a}function h(){const a=E([&quot;\n      &lt;rect class=&#39;line--rect&#39;\n        ?inactive=&quot;,&quot;\n        id=&quot;,&quot;\n        fill=&quot;,&quot; height=\&quot;100%\&quot; width=\&quot;100%\&quot;\n        mask=&quot;,&quot;\n      /&gt;&quot;]);return h=function(){return a},a}function i(){const a=E([&quot;&quot;,&quot;&quot;]);return i=function(){return a},a}function j(){const a=E([&quot;\n            &lt;stop stop-color=&quot;,&quot; offset=&quot;,&quot; /&gt;\n          &quot;]);return j=function(){return a},a}function k(){const a=E([&quot;\n        &lt;linearGradient id=&quot;,&quot; gradientTransform=\&quot;rotate(90)\&quot;&gt;\n          &quot;,&quot;\n        &lt;/linearGradient&gt;&quot;]);return k=function(){return a},a}function l(){const a=E([&quot;\n      &lt;g class=&#39;line--points&#39;\n        ?tooltip=&quot;,&quot;\n        ?inactive=&quot;,&quot;\n        ?init=&quot;,&quot;\n        anim=&quot;,&quot;\n        style=\&quot;animation-delay: &quot;,&quot;\&quot;\n        fill=&quot;,&quot;\n        stroke=&quot;,&quot;\n        stroke-width=&quot;,&quot;&gt;\n        &quot;,&quot;\n      &lt;/g&gt;&quot;]);return l=function(){return a},a}function m(){const a=E([&quot;\n      &lt;circle\n        class=&#39;line--point&#39;\n        ?inactive=&quot;,&quot;\n        style=&quot;,&quot;\n        stroke=&quot;,&quot;\n        fill=&quot;,&quot;\n        cx=&quot;,&quot; cy=&quot;,&quot; r=&quot;,&quot;\n        @mouseover=&quot;,&quot;\n        @mouseout=&quot;,&quot;\n      /&gt;\n    &quot;]);return m=function(){return a},a}function n(){const a=E([&quot;\n      &lt;mask id=&quot;,&quot;&gt;\n        &quot;,&quot;\n      &lt;/mask&gt;\n    &quot;]);return n=function(){return a},a}function o(){const a=E([&quot;\n      &lt;path\n        class=&#39;line&#39;\n        .id=&quot;,&quot;\n        anim=&quot;,&quot; ?init=&quot;,&quot;\n        style=\&quot;animation-delay: &quot;,&quot;\&quot;\n        fill=&#39;none&#39;\n        stroke-dasharray=&quot;,&quot; stroke-dashoffset=&quot;,&quot;\n        stroke=&quot;,&quot;\n        stroke-width=&quot;,&quot;\n        d=&quot;,&quot;\n      /&gt;&quot;]);return o=function(){return a},a}function p(){const a=E([&quot;\n      &lt;defs&gt;\n        &lt;linearGradient id=&quot;,&quot; x1=\&quot;0%\&quot; y1=\&quot;0%\&quot; x2=\&quot;0%\&quot; y2=\&quot;100%\&quot;&gt;\n          &lt;stop stop-color=&quot;,&quot; offset=&#39;0%&#39; stop-opacity=&#39;1&#39;/&gt;\n          &lt;stop stop-color=&quot;,&quot; offset=&#39;100%&#39; stop-opacity=&#39;.15&#39;/&gt;\n        &lt;/linearGradient&gt;\n      &lt;/defs&gt;\n      &lt;path class=&#39;line--fill&#39;\n        ?inactive=&quot;,&quot;\n        type=&quot;,&quot;\n        .id=&quot;,&quot; anim=&quot;,&quot; ?init=&quot;,&quot;\n        style=\&quot;animation-delay: &quot;,&quot;\&quot;\n        fill=&quot;,&quot;\n        stroke=&quot;,&quot;\n        stroke-width=&quot;,&quot;\n        d=&quot;,&quot;\n      /&gt;&quot;]);return p=function(){return a},a}function q(){const a=E([&quot;\n      &lt;svg width=&#39;10&#39; height=&#39;10&#39;&gt;\n        &lt;rect width=&#39;10&#39; height=&#39;10&#39; fill=&quot;,&quot; /&gt;\n      &lt;/svg&gt;\n    &quot;]);return q=function(){return a},a}function r(){const a=E([&quot;\n          &lt;div class=\&quot;graph__legend__item\&quot;\n            @click=&quot;,&quot;\n            @mouseover=&quot;,&quot;\n            @mouseout=&quot;,&quot;&gt;\n            &quot;,&quot;\n            &lt;span class=\&quot;ellipsis\&quot;&gt;&quot;,&quot;&lt;/span&gt;\n          &lt;/div&gt;\n        &quot;]);return r=function(){return a},a}function s(){const a=E([&quot;\n      &lt;div class=\&quot;graph__legend\&quot;&gt;\n        &quot;,&quot;\n      &lt;/div&gt;\n    &quot;]);return s=function(){return a},a}function t(){const a=E([&quot;\n      &lt;div class=\&quot;graph\&quot;&gt;\n        &lt;div class=\&quot;graph__container\&quot;&gt;\n          &quot;,&quot;\n          &lt;div class=\&quot;graph__container__svg\&quot;&gt;\n            &quot;,&quot;\n          &lt;/div&gt;\n        &lt;/div&gt;\n        &quot;,&quot;\n      &lt;/div&gt;&quot;]);return t=function(){return a},a}function u(){const a=E([&quot;\n          &lt;span&gt;&quot;,&quot;&lt;/span&gt; -\n          &lt;span&gt;&quot;,&quot;&lt;/span&gt;\n        &quot;]);return u=function(){return a},a}function v(){const a=E([&quot;\n          &lt;span&gt;&quot;,&quot;&lt;/span&gt;\n        &quot;]);return v=function(){return a},a}function w(){const a=E([&quot;\n      &lt;div class=\&quot;state__time\&quot;&gt;\n        &quot;,&quot;\n      &lt;/div&gt;\n    &quot;]);return w=function(){return a},a}function x(){const a=E([&quot;\n        &lt;div\n          class=\&quot;state state--small\&quot;\n          style=&quot;,&quot;&gt;\n          &quot;,&quot;\n          &lt;span class=\&quot;state__value ellipsis\&quot;&gt;\n            &quot;,&quot;\n          &lt;/span&gt;\n          &lt;span class=\&quot;state__uom ellipsis\&quot;&gt;\n            &quot;,&quot;\n          &lt;/span&gt;\n        &lt;/div&gt;\n      &quot;]);return x=function(){return a},a}function y(){const a=E([&quot;\n        &lt;div class=\&quot;states flex\&quot; loc=&quot;,&quot;&gt;\n          &lt;div class=\&quot;state\&quot;&gt;\n            &lt;span class=\&quot;state__value ellipsis\&quot; style=&quot;,&quot;&gt;\n              &quot;,&quot;\n            &lt;/span&gt;\n            &lt;span class=\&quot;state__uom ellipsis\&quot; style=&quot;,&quot;&gt;\n              &quot;,&quot;\n            &lt;/span&gt;\n            &quot;,&quot;\n          &lt;/div&gt;\n          &lt;div class=\&quot;states--secondary\&quot;&gt;&quot;,&quot;&lt;/div&gt;\n          &quot;,&quot;\n        &lt;/div&gt;\n      &quot;]);return y=function(){return a},a}function z(){const a=E([&quot;\n      &lt;div class=\&quot;name flex\&quot;&gt;\n        &lt;span class=\&quot;ellipsis\&quot; style=&quot;,&quot;&gt;&quot;,&quot;&lt;/span&gt;\n      &lt;/div&gt;\n    &quot;]);return z=function(){return a},a}function A(){const a=E([&quot;\n      &lt;div class=\&quot;icon\&quot; loc=&quot;,&quot;\n        style=&quot;,&quot;&gt;\n        &lt;ha-icon .icon=&quot;,&quot;&gt;&lt;/ha-icon&gt;\n      &lt;/div&gt;\n    &quot;]);return A=function(){return a},a}function B(){const a=E([&quot;\n          &lt;div class=\&quot;header flex\&quot; loc=&quot;,&quot; style=\&quot;font-size: &quot;,&quot;px;\&quot;&gt;\n            &quot;,&quot; &quot;,&quot;\n          &lt;/div&gt;\n        &quot;]);return B=function(){return a},a}function C(){const a=E([&quot;\n      &lt;ha-card\n        class=\&quot;flex\&quot;\n        ?group=&quot;,&quot;\n        ?fill=&quot;,&quot;\n        ?points=&quot;,&quot;\n        ?labels=&quot;,&quot;\n        ?gradient=&quot;,&quot;\n        ?more-info=&quot;,&quot;\n        style=\&quot;font-size: &quot;,&quot;px;\&quot;\n        @click=&quot;,&quot;\n      &gt;\n        &quot;,&quot; &quot;,&quot; &quot;,&quot; &quot;,&quot;\n      &lt;/ha-card&gt;\n    &quot;]);return C=function(){return a},a}function D(){const a=E([&quot;\n  :host {\n    display: flex;\n    flex-direction: column;\n  }\n  ha-card {\n    flex-direction: column;\n    flex: 1;\n    padding: 16px 0;\n    position: relative;\n    overflow: hidden;\n  }\n  ha-card &gt; div {\n    padding: 0px 16px 16px 16px;\n  }\n  ha-card &gt; div:last-child {\n    padding-bottom: 0;\n  }\n  ha-card[points] .line--points,\n  ha-card[labels] .graph__labels {\n    opacity: 0;\n    transition: opacity .25s;\n    animation: none;\n  }\n  ha-card[points]:hover .line--points,\n  ha-card:hover .graph__labels {\n    opacity: 1;\n  }\n  ha-card[fill] {\n    padding-bottom: 0;\n  }\n  ha-card[fill] .graph {\n    padding: 0;\n    order: 10;\n  }\n  ha-card[fill] path {\n    stroke-linecap: initial;\n    stroke-linejoin: initial;\n  }\n  ha-card[fill] .graph__legend {\n    order: -1;\n    padding: 0 16px 8px 16px;\n  }\n  ha-card[fill] .info {\n    padding-bottom: 16px;\n  }\n  ha-card[group] {\n    box-shadow: none;\n    padding: 0;\n  }\n  ha-card[group] &gt; div {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  ha-card[group] .graph__legend {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  ha-card[more-info] {\n    cursor: pointer;\n  }\n  .flex {\n    display: flex;\n    display: -webkit-flex;\n    min-width: 0;\n  }\n  .header {\n    justify-content: space-between;\n  }\n  .header[loc=\&quot;center\&quot;] {\n    justify-content: space-around;\n  }\n  .header[loc=\&quot;left\&quot;] {\n    align-self: flex-start;\n  }\n  .header[loc=\&quot;right\&quot;] {\n    align-self: flex-end;\n  }\n  .name {\n    align-items: center;\n    min-width: 0;\n    opacity: .8;\n    letter-spacing: .05em;\n  }\n  .name &gt; span {\n    font-size: 1.2em;\n    font-weight: 400;\n    max-height: 1.4em;\n    min-height: 1.4em;\n    opacity: .75;\n  }\n  .icon {\n    color: var(--paper-item-icon-color, #44739e);\n    display: inline-block;\n    flex: 0 0 1.7em;\n    text-align: center;\n  }\n  .icon &gt; ha-icon {\n    height: 1.7em;\n    width: 1.7em;\n  }\n  .icon[loc=\&quot;left\&quot;] {\n    order: -1;\n    margin-right: .6em;\n    margin-left: 0;\n  }\n  .icon[loc=\&quot;state\&quot;] {\n    align-self: center;\n  }\n  .states {\n    align-items: flex-start;\n    font-weight: 300;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n  }\n  .states .icon {\n    align-self: center;\n    margin-left: 0;\n  }\n  .states[loc=\&quot;center\&quot;] {\n    justify-content: space-evenly;\n  }\n  .states[loc=\&quot;right\&quot;] &gt; .state {\n    margin-left: auto;\n    order: 2;\n  }\n  .states[loc=\&quot;center\&quot;] .states--secondary,\n  .states[loc=\&quot;right\&quot;] .states--secondary {\n    margin-left: 0;\n  }\n  .states[loc=\&quot;center\&quot;] .states--secondary {\n    align-items: center;\n  }\n  .states[loc=\&quot;right\&quot;] .states--secondary {\n    align-items: flex-start;\n  }\n  .states[loc=\&quot;center\&quot;] .state__time {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .states &gt; .icon &gt; ha-icon {\n    height: 2em !important;\n    width: 2em !important;\n  }\n  .states--secondary {\n    display: flex;\n    flex-flow: column;\n    flex-wrap: wrap;\n    align-items: flex-end;\n    margin-left: 1rem;\n    min-width: 0;\n    margin-left: 1.4em;\n  }\n  .states--secondary:empty {\n    display: none;\n  }\n  .state {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    min-width: 0;\n  }\n  .state--small {\n    font-size: .6em;\n    margin-bottom: .6rem;\n    flex-wrap: nowrap;\n  }\n  .state--small &gt; svg {\n    position: absolute;\n    left: -1.6em;\n    align-self: center;\n    height: 1em;\n    width: 1em;\n    border-radius: 100%;\n    margin-right: 1em;\n  }\n  .state--small:last-child {\n    margin-bottom: 0;\n  }\n  .states--secondary &gt; :only-child {\n    font-size: 1em;\n    margin-bottom: 0;\n  }\n  .states--secondary &gt; :only-child svg {\n    display: none;\n  }\n  .state__value {\n    display: inline-block;\n    font-size: 2.4em;\n    line-height: 1em;\n    margin-right: .25rem;\n  }\n  .state__uom {\n    align-self: flex-end;\n    display: inline-block;\n    font-size: 1.4em;\n    font-weight: 400;\n    line-height: 1.2em;\n    margin-top: .1em;\n    opacity: .6;\n    vertical-align: bottom;\n  }\n  .state--small .state__uom {\n    flex: 1;\n  }\n  .state__time {\n    font-size: .95rem;\n    font-weight: 500;\n    bottom: -1.1rem;\n    left: 0;\n    opacity: .75;\n    position: absolute;\n    white-space: nowrap;\n  }\n  .states[loc=\&quot;right\&quot;] .state__time {\n    left: initial;\n    right: 0;\n  }\n  .graph {\n    align-self: flex-end;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    margin-top: auto;\n    width: 100%;\n  }\n  .graph__container {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n  }\n  .graph__container__svg {\n    cursor: default;\n    flex: 1;\n  }\n  svg {\n    overflow: hidden;\n  }\n  path {\n    stroke-linecap: round;\n    stroke-linejoin: round;\n  }\n  .line--fill[anim=\&quot;false\&quot;] {\n    animation: reveal .25s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n  }\n  .line--fill[anim=\&quot;false\&quot;][type=\&quot;fade\&quot;] {\n    animation: reveal-2 .25s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n  }\n  .line--points[anim=\&quot;false\&quot;],\n  .line[anim=\&quot;false\&quot;] {\n    animation: pop .25s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n  }\n  .line--points[inactive],\n  .line--rect[inactive],\n  .line--fill[inactive] {\n    opacity: 0 !important;\n    animation: none !important;\n    transition: all .15s !important;\n  }\n  .line--points[inactive] {\n  }\n  .line--points[tooltip] .line--point[inactive] {\n    opacity: 0;\n  }\n  .line--point {\n    cursor: pointer;\n    fill: var(--paper-card-background-color, white);\n    stroke-width: inherit;\n  }\n  .line--point:hover {\n    fill: var(--mcg-hover, inherit) !important;\n  }\n  .bars {\n    animation: pop .25s cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  .bars[anim] {\n    animation: bars .5s cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  .bar {\n    transition: opacity .25s cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  .bar:hover {\n    opacity: .5;\n    cursor: pointer;\n  }\n  ha-card[gradient] .line--point:hover {\n    fill: var(--primary-text-color, white);\n  }\n  path,\n  .line--points,\n  .line--fill {\n    opacity: 0;\n  }\n  .line--points[anim=\&quot;true\&quot;][init] {\n    animation: pop .5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n  }\n  .line--fill[anim=\&quot;true\&quot;][init] {\n    animation: reveal .5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n  }\n  .line--fill[anim=\&quot;true\&quot;][init][type=\&quot;fade\&quot;] {\n    animation: reveal-2 .5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n  }\n  .line[anim=\&quot;true\&quot;][init] {\n    animation: dash 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n  }\n  .graph__labels {\n    align-items: flex-start;\n    flex-direction: column;\n    font-size: calc(.15em + 8.5px);\n    font-weight: 400;\n    justify-content: space-between;\n    margin-right: 10px;\n    padding: .6em;\n    position: absolute;\n    pointer-events: none;\n    top: 0; bottom: 0;\n    opacity: .75;\n  }\n  .graph__labels &gt; span {\n    cursor: pointer;\n    background: var(--primary-background-color, white);\n    border-radius: 1em;\n    padding: .2em .6em;\n    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);\n  }\n  .graph__legend {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    padding-top: 16px;\n    flex-wrap: wrap;\n  }\n  .graph__legend__item {\n    cursor: pointer;\n    display: flex;\n    min-width: 0;\n    margin: .4em;\n    align-items: center\n  }\n  .graph__legend__item span {\n    opacity: .75;\n    margin-left: .4em;\n  }\n  .graph__legend__item svg {\n    border-radius: 100%;\n  }\n  .info {\n    justify-content: space-between;\n    align-items: middle;\n  }\n  .info__item {\n    display: flex;\n    flex-flow: column;\n    align-items: flex-end;\n    text-align: right;\n  }\n  .info__item:first-child {\n    align-items: flex-start;\n    text-align: left;\n  }\n  .info__item__type {\n    text-transform: capitalize;\n    font-weight: 500;\n    opacity: .9;\n  }\n  .info__item__time,\n  .info__item__value {\n    opacity: .75;\n  }\n  .ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  @keyframes reveal {\n    0% { opacity: 0; }\n    100% { opacity: .15; }\n  }\n  @keyframes reveal-2 {\n    0% { opacity: 0; }\n    100% { opacity: .4; }\n  }\n  @keyframes pop {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n  }\n  @keyframes bars {\n    0% { opacity: 0; }\n    50% { opacity: 0; }\n    100% { opacity: 1; }\n  }\n  @keyframes dash {\n    0% {\n      opacity: 0;\n    }\n    25% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 1;\n      stroke-dashoffset: 0;\n    }\n  }&quot;]);return D=function(){return a},a}function E(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function F(a){for(var b=1;b&lt;arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);&quot;function&quot;==typeof Object.getOwnPropertySymbols&amp;&amp;(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){G(a,b,c[b])})}return a}function G(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function H(a){return K(a)||J(a)||I()}function I(){throw new TypeError(&quot;Invalid attempt to spread non-iterable instance&quot;)}function J(a){if(Symbol.iterator in Object(a)||&quot;[object Arguments]&quot;===Object.prototype.toString.call(a))return Array.from(a)}function K(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b&lt;a.length;b++)c[b]=a[b];return c}}(function(a,b){&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module?b():&quot;function&quot;==typeof define&amp;&amp;define.amd?define(b):b()})(this,function(){var ta=Number.isNaN,ua=Math.max,va=Math.min,wa=Math.ceil,xa=Math.abs;function E(a){let b=_a.get(a.type);void 0===b&amp;&amp;(b={stringsArray:new WeakMap,keyString:new Map},_a.set(a.type,b));let c=b.stringsArray.get(a.strings);if(void 0!==c)return c;const d=a.strings.join(Fa);return c=b.keyString.get(d),void 0===c&amp;&amp;(c=new Ja(a,a.getTemplateElement()),b.keyString.set(d,c)),b.stringsArray.set(a.strings,c),c}function G(a,b){const{element:{content:d},parts:c}=a,e=document.createTreeWalker(d,eb,null,!1);let f=gb(c),g=c[f],h=-1,i=0;const j=[];for(let d=null;e.nextNode();){h++;const a=e.currentNode;for(a.previousSibling===d&amp;&amp;(d=null),b.has(a)&amp;&amp;(j.push(a),null===d&amp;&amp;(d=a)),null!==d&amp;&amp;i++;g!==void 0&amp;&amp;g.index===h;)g.index=null===d?g.index-i:-1,f=gb(c,f),g=c[f]}j.forEach(a=&gt;a.parentNode.removeChild(a))}function I(a,b,c=null){const{element:{content:e},parts:d}=a;if(null===c||void 0===c)return void e.appendChild(b);const f=document.createTreeWalker(e,eb,null,!1);let g=gb(d),h=0,i=-1;for(;f.nextNode();){i++;const a=f.currentNode;for(a===c&amp;&amp;(h=fb(b),c.parentNode.insertBefore(b,c));-1!==g&amp;&amp;d[g].index===i;){if(0&lt;h){for(;-1!==g;)d[g].index+=h,g=gb(d,g);return}g=gb(d,g)}}}function J(a,b=[]){for(let c=0,d=a.length;c&lt;d;c++){const d=a[c];Array.isArray(d)?J(d,b):b.push(d)}return b}function K(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if(&quot;TypeError&quot;!==f.name)throw f;for(var c=&quot;undefined&quot;==typeof BlobBuilder?&quot;undefined&quot;==typeof MSBlobBuilder?&quot;undefined&quot;==typeof MozBlobBuilder?WebKitBlobBuilder:MozBlobBuilder:MSBlobBuilder:BlobBuilder,d=new c,e=0;e&lt;a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function L(a,b){b&amp;&amp;a.then(function(a){b(null,a)},function(a){b(a)})}function M(a,b,c){&quot;function&quot;==typeof b&amp;&amp;a.then(b),&quot;function&quot;==typeof c&amp;&amp;a.catch(c)}function N(a){return&quot;string&quot;!=typeof a&amp;&amp;(console.warn(&quot;&quot;.concat(a,&quot; used as a key, but it is not a string.&quot;)),a+=&quot;&quot;),a}function O(){if(arguments.length&amp;&amp;&quot;function&quot;==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function P(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e&lt;b;e++)d[e]=a.charCodeAt(e);return c}function Q(a){return new Promise(function(b){var c=a.transaction(Gb,Lb),d=K([&quot;&quot;]);c.objectStore(Gb).put(d,&quot;key&quot;),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||43&lt;=parseInt(a[1],10))}}).catch(function(){return!1})}function R(a){return&quot;boolean&quot;==typeof Hb?Promise.resolve(Hb):Q(a).then(function(a){return Hb=a,Hb})}function S(a){var b=Ib[a.name],c={};c.promise=new Promise(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady=b.dbReady?b.dbReady.then(function(){return c.promise}):c.promise}function T(a){var b=Ib[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function U(a,b){var c=Ib[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function W(a,b){return new Promise(function(c,d){if(Ib[a.name]=Ib[a.name]||ga(),a.db)if(b)S(a),a.db.close();else return c(a.db);var e=[a.name];b&amp;&amp;e.push(a.version);var f=Fb.open.apply(Fb,e);b&amp;&amp;(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),1&gt;=b.oldVersion&amp;&amp;c.createObjectStore(Gb)}catch(c){if(&quot;ConstraintError&quot;===c.name)console.warn(&quot;The database \&quot;&quot;+a.name+&quot;\&quot; has been upgraded from version &quot;+b.oldVersion+&quot; to version &quot;+b.newVersion+&quot;, but the storage \&quot;&quot;+a.storeName+&quot;\&quot; already exists.&quot;);else throw c}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){c(f.result),T(a)}})}function Z(a){return W(a,!1)}function $(a){return W(a,!0)}function _(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version&lt;a.db.version,e=a.version&gt;a.db.version;if(d&amp;&amp;(a.version!==b&amp;&amp;console.warn(&quot;The database \&quot;&quot;+a.name+&quot;\&quot; can&#39;t be downgraded from version &quot;+a.db.version+&quot; to version &quot;+a.version+&quot;.&quot;),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f&gt;a.version&amp;&amp;(a.version=f)}return!0}return!1}function aa(a){return new Promise(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||&quot;&quot;);b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function ba(a){var b=P(atob(a.data));return K([b],{type:a.type})}function ca(a){return a&amp;&amp;a.__local_forage_encoded_blob}function da(a){var b=this,c=b._initReady().then(function(){var a=Ib[b._dbInfo.name];if(a&amp;&amp;a.dbReady)return a.dbReady});return M(c,a,a),c}function ea(a){S(a);for(var b=Ib[a.name],c=b.forages,d=0;d&lt;c.length;d++){const a=c[d];a._dbInfo.db&amp;&amp;(a._dbInfo.db.close(),a._dbInfo.db=null)}return a.db=null,Z(a).then(b=&gt;(a.db=b,_(a)?$(a):b)).then(d=&gt;{a.db=b.db=d;for(var e=0;e&lt;c.length;e++)c[e]._dbInfo.db=d}).catch(b=&gt;{throw U(a,b),b})}function fa(a,b,c,d){d===void 0&amp;&amp;(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(0&lt;d&amp;&amp;(!a.db||&quot;InvalidStateError&quot;===e.name||&quot;NotFoundError&quot;===e.name))return Promise.resolve().then(()=&gt;{if(!a.db||&quot;NotFoundError&quot;===e.name&amp;&amp;!a.db.objectStoreNames.contains(a.storeName)&amp;&amp;a.version&lt;=a.db.version)return a.db&amp;&amp;(a.version=a.db.version+1),$(a)}).then(()=&gt;ea(a).then(function(){fa(a,b,c,d-1)})).catch(c);c(e)}}function ga(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function ha(a){var b,c,d,e,f,g=.75*a.length,h=a.length,j=0;&quot;=&quot;===a[a.length-1]&amp;&amp;(g--,&quot;=&quot;===a[a.length-2]&amp;&amp;g--);var k=new ArrayBuffer(g),l=new Uint8Array(k);for(b=0;b&lt;h;b+=4)c=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;.indexOf(a[b]),d=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;.indexOf(a[b+1]),e=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;.indexOf(a[b+2]),f=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;.indexOf(a[b+3]),l[j++]=c&lt;&lt;2|d&gt;&gt;4,l[j++]=(15&amp;d)&lt;&lt;4|e&gt;&gt;2,l[j++]=(3&amp;e)&lt;&lt;6|63&amp;f;return k}function ia(a){var b,c=new Uint8Array(a),d=&quot;&quot;;for(b=0;b&lt;c.length;b+=3)d+=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;[c[b]&gt;&gt;2],d+=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;[(3&amp;c[b])&lt;&lt;4|c[b+1]&gt;&gt;4],d+=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;[(15&amp;c[b+1])&lt;&lt;2|c[b+2]&gt;&gt;6],d+=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;[63&amp;c[b+2]];return 2==c.length%3?d=d.substring(0,d.length-1)+&quot;=&quot;:1==c.length%3&amp;&amp;(d=d.substring(0,d.length-2)+&quot;==&quot;),d}function ja(a,b,c,d){a.executeSql(&quot;CREATE TABLE IF NOT EXISTS &quot;.concat(b.storeName,&quot; &quot;)+&quot;(id INTEGER PRIMARY KEY, key unique, value)&quot;,[],c,d)}function ka(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql(&quot;SELECT name FROM sqlite_master WHERE type=&#39;table&#39; AND name = ?&quot;,[b.storeName],function(a,h){h.rows.length?f(a,g):ja(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function la(a,b,c,d){var e=this;a=N(a);var f=new Promise(function(f,g){e.ready().then(function(){void 0===b&amp;&amp;(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){ka(c,i,&quot;INSERT OR REPLACE INTO &quot;.concat(i.storeName,&quot; &quot;)+&quot;(key, value) VALUES (?, ?)&quot;,[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(0&lt;d)return void f(la.apply(e,[a,h,c,d-1]));g(b)}})})}).catch(g)});return L(f,c),f}function ma(a){return new Promise(function(b,c){a.transaction(function(d){d.executeSql(&quot;SELECT name FROM sqlite_master WHERE type=&#39;table&#39; AND name &lt;&gt; &#39;__WebKitDatabaseInfoTable__&#39;&quot;,[],function(c,d){for(var e=[],f=0;f&lt;d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function na(){try{return&quot;undefined&quot;!=typeof localStorage&amp;&amp;&quot;setItem&quot;in localStorage&amp;&amp;!!localStorage.setItem}catch(a){return!1}}function oa(a,b){var c=a.name+&quot;/&quot;;return a.storeName!==b.storeName&amp;&amp;(c+=a.storeName+&quot;/&quot;),c}function pa(){try{return localStorage.setItem(&quot;_localforage_support_test&quot;,!0),localStorage.removeItem(&quot;_localforage_support_test&quot;),!1}catch(a){return!0}}function qa(){return!pa()||0&lt;localStorage.length}function ra(a,b){a[b]=function(){const c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(let a=1;a&lt;arguments.length;a++){const b=arguments[a];if(b)for(let a in b)b.hasOwnProperty(a)&amp;&amp;(arguments[0][a]=Wb(b[a])?b[a].slice():b[a])}return arguments[0]}const ya=new WeakMap,za=a=&gt;&quot;function&quot;==typeof a&amp;&amp;ya.has(a),Aa=window.customElements!==void 0&amp;&amp;window.customElements.polyfillWrapFlushCallback!==void 0,Ba=(a,b,c=null,d=null)=&gt;{for(let e=b;e!==c;){const b=e.nextSibling;a.insertBefore(e,d),e=b}},Ca=(a,b,c=null)=&gt;{for(let d=b;d!==c;){const b=d.nextSibling;a.removeChild(d),d=b}},Da={},Ea={},Fa=&quot;{{lit-&quot;.concat((Math.random()+&quot;&quot;).slice(2),&quot;}}&quot;),Ga=&quot;&lt;!--&quot;.concat(Fa,&quot;--&gt;&quot;),Ha=new RegExp(&quot;&quot;.concat(Fa,&quot;|&quot;).concat(Ga)),Ia=&quot;$lit$&quot;;class Ja{constructor(a,b){this.parts=[],this.element=b;let c=-1,d=0;const e=[],f=b=&gt;{const g=b.content,h=document.createTreeWalker(g,133,null,!1);for(let g=0;h.nextNode();){c++;const b=h.currentNode;if(1===b.nodeType){if(b.hasAttributes()){const e=b.attributes;let f=0;for(let a=0;a&lt;e.length;a++)0&lt;=e[a].value.indexOf(Fa)&amp;&amp;f++;for(;0&lt;f--;){const e=a.strings[d],f=Ma.exec(e)[2],g=f.toLowerCase()+Ia,h=b.getAttribute(g),i=h.split(Ha);this.parts.push({type:&quot;attribute&quot;,index:c,name:f,strings:i}),b.removeAttribute(g),d+=i.length-1}}&quot;TEMPLATE&quot;===b.tagName&amp;&amp;f(b)}else if(3===b.nodeType){const a=b.data;if(0&lt;=a.indexOf(Fa)){const f=b.parentNode,g=a.split(Ha),h=g.length-1;for(let a=0;a&lt;h;a++)f.insertBefore(&quot;&quot;===g[a]?La():document.createTextNode(g[a]),b),this.parts.push({type:&quot;node&quot;,index:++c});&quot;&quot;===g[h]?(f.insertBefore(La(),b),e.push(b)):b.data=g[h],d+=h}}else if(8===b.nodeType)if(b.data===Fa){const a=b.parentNode;(null===b.previousSibling||c===g)&amp;&amp;(c++,a.insertBefore(La(),b)),g=c,this.parts.push({type:&quot;node&quot;,index:c}),null===b.nextSibling?b.data=&quot;&quot;:(e.push(b),c--),d++}else for(let a=-1;-1!==(a=b.data.indexOf(Fa,a+1));)this.parts.push({type:&quot;node&quot;,index:-1})}};f(b);for(const c of e)c.parentNode.removeChild(c)}}const Ka=a=&gt;-1!==a.index,La=()=&gt;document.createComment(&quot;&quot;),Ma=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d&quot;&#39;&gt;=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d&quot;&#39;`&lt;&gt;=]*|&quot;[^&quot;]*|&#39;[^&#39;]*))$/;class Na{constructor(a,b,c){this._parts=[],this.template=a,this.processor=b,this.options=c}update(a){let b=0;for(const c of this._parts)void 0!==c&amp;&amp;c.setValue(a[b]),b++;for(const b of this._parts)void 0!==b&amp;&amp;b.commit()}_clone(){const a=Aa?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),b=this.template.parts;let c=0,d=0;const e=a=&gt;{const f=document.createTreeWalker(a,133,null,!1);for(let h=f.nextNode();c&lt;b.length&amp;&amp;null!==h;){const a=b[c];if(!Ka(a))this._parts.push(void 0),c++;else if(d===a.index){if(&quot;node&quot;===a.type){const a=this.processor.handleTextExpression(this.options);a.insertAfterNode(h.previousSibling),this._parts.push(a)}else{var g;(g=this._parts).push.apply(g,H(this.processor.handleAttributeExpressions(h,a.name,a.strings,this.options)))}c++}else d++,&quot;TEMPLATE&quot;===h.nodeName&amp;&amp;e(h.content),h=f.nextNode()}};return e(a),Aa&amp;&amp;(document.adoptNode(a),customElements.upgrade(a)),a}}class Oa{constructor(a,b,c,d){this.strings=a,this.values=b,this.type=c,this.processor=d}getHTML(){const a=this.strings.length-1;let b=&quot;&quot;;for(let c=0;c&lt;a;c++){const a=this.strings[c],d=Ma.exec(a);b+=d?a.substr(0,d.index)+d[1]+d[2]+Ia+d[3]+Fa:a+Ga}return b+this.strings[a]}getTemplateElement(){const a=document.createElement(&quot;template&quot;);return a.innerHTML=this.getHTML(),a}}class Pa extends Oa{getHTML(){return&quot;&lt;svg&gt;&quot;.concat(super.getHTML(),&quot;&lt;/svg&gt;&quot;)}getTemplateElement(){const a=super.getTemplateElement(),b=a.content,c=b.firstChild;return b.removeChild(c),Ba(b,c.firstChild),a}}const Qa=a=&gt;null===a||&quot;object&quot;!=typeof a&amp;&amp;&quot;function&quot;!=typeof a;class Ra{constructor(a,b,c){this.dirty=!0,this.element=a,this.name=b,this.strings=c,this.parts=[];for(let d=0;d&lt;c.length-1;d++)this.parts[d]=this._createPart()}_createPart(){return new Sa(this)}_getValue(){const a=this.strings,b=a.length-1;let c=&quot;&quot;;for(let d=0;d&lt;b;d++){c+=a[d];const b=this.parts[d];if(void 0!==b){const a=b.value;if(null!=a&amp;&amp;(Array.isArray(a)||&quot;string&quot;!=typeof a&amp;&amp;a[Symbol.iterator]))for(const b of a)c+=&quot;string&quot;==typeof b?b:b+&quot;&quot;;else c+=&quot;string&quot;==typeof a?a:a+&quot;&quot;}}return c+=a[b],c}commit(){this.dirty&amp;&amp;(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Sa{constructor(a){this.value=void 0,this.committer=a}setValue(a){a===Da||Qa(a)&amp;&amp;a===this.value||(this.value=a,!za(a)&amp;&amp;(this.committer.dirty=!0))}commit(){for(;za(this.value);){const a=this.value;this.value=Da,a(this)}this.value===Da||this.committer.commit()}}class Ta{constructor(a){this.value=void 0,this._pendingValue=void 0,this.options=a}appendInto(a){this.startNode=a.appendChild(La()),this.endNode=a.appendChild(La())}insertAfterNode(a){this.startNode=a,this.endNode=a.nextSibling}appendIntoPart(a){a._insert(this.startNode=La()),a._insert(this.endNode=La())}insertAfterPart(a){a._insert(this.startNode=La()),this.endNode=a.endNode,a.endNode=this.startNode}setValue(a){this._pendingValue=a}commit(){for(;za(this._pendingValue);){const a=this._pendingValue;this._pendingValue=Da,a(this)}const a=this._pendingValue;a===Da||(Qa(a)?a!==this.value&amp;&amp;this._commitText(a):a instanceof Oa?this._commitTemplateResult(a):a instanceof Node?this._commitNode(a):Array.isArray(a)||a[Symbol.iterator]?this._commitIterable(a):a===Ea?(this.value=Ea,this.clear()):this._commitText(a))}_insert(a){this.endNode.parentNode.insertBefore(a,this.endNode)}_commitNode(a){this.value===a||(this.clear(),this._insert(a),this.value=a)}_commitText(a){const b=this.startNode.nextSibling;a=null==a?&quot;&quot;:a,b===this.endNode.previousSibling&amp;&amp;3===b.nodeType?b.data=a:this._commitNode(document.createTextNode(&quot;string&quot;==typeof a?a:a+&quot;&quot;)),this.value=a}_commitTemplateResult(a){const b=this.options.templateFactory(a);if(this.value instanceof Na&amp;&amp;this.value.template===b)this.value.update(a.values);else{const c=new Na(b,a.processor,this.options),d=c._clone();c.update(a.values),this._commitNode(d),this.value=c}}_commitIterable(a){Array.isArray(this.value)||(this.value=[],this.clear());const b=this.value;let c,d=0;for(const e of a)c=b[d],void 0===c&amp;&amp;(c=new Ta(this.options),b.push(c),0==d?c.appendIntoPart(this):c.insertAfterPart(b[d-1])),c.setValue(e),c.commit(),d++;d&lt;b.length&amp;&amp;(b.length=d,this.clear(c&amp;&amp;c.endNode))}clear(a=this.startNode){Ca(this.startNode.parentNode,a.nextSibling,this.endNode)}}class Ua{constructor(a,b,c){if(this.value=void 0,this._pendingValue=void 0,2!==c.length||&quot;&quot;!==c[0]||&quot;&quot;!==c[1])throw new Error(&quot;Boolean attributes can only contain a single expression&quot;);this.element=a,this.name=b,this.strings=c}setValue(a){this._pendingValue=a}commit(){for(;za(this._pendingValue);){const a=this._pendingValue;this._pendingValue=Da,a(this)}if(this._pendingValue!==Da){const a=!!this._pendingValue;this.value!==a&amp;&amp;(a?this.element.setAttribute(this.name,&quot;&quot;):this.element.removeAttribute(this.name)),this.value=a,this._pendingValue=Da}}}class Va extends Ra{constructor(a,b,c){super(a,b,c),this.single=2===c.length&amp;&amp;&quot;&quot;===c[0]&amp;&amp;&quot;&quot;===c[1]}_createPart(){return new Wa(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&amp;&amp;(this.dirty=!1,this.element[this.name]=this._getValue())}}class Wa extends Sa{}let Xa=!1;try{const a={get capture(){return Xa=!0,!1}};window.addEventListener(&quot;test&quot;,a,a),window.removeEventListener(&quot;test&quot;,a,a)}catch(a){}class Ya{constructor(a,b,c){this.value=void 0,this._pendingValue=void 0,this.element=a,this.eventName=b,this.eventContext=c,this._boundHandleEvent=a=&gt;this.handleEvent(a)}setValue(a){this._pendingValue=a}commit(){for(;za(this._pendingValue);){const a=this._pendingValue;this._pendingValue=Da,a(this)}if(this._pendingValue===Da)return;const a=this._pendingValue,b=this.value,c=null==a||null!=b&amp;&amp;(a.capture!==b.capture||a.once!==b.once||a.passive!==b.passive);c&amp;&amp;this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),null!=a&amp;&amp;(null==b||c)&amp;&amp;(this._options=Za(a),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=a,this._pendingValue=Da}handleEvent(a){&quot;function&quot;==typeof this.value?this.value.call(this.eventContext||this.element,a):this.value.handleEvent(a)}}const Za=a=&gt;a&amp;&amp;(Xa?{capture:a.capture,passive:a.passive,once:a.once}:a.capture);const $a=new class{handleAttributeExpressions(a,b,c,d){const e=b[0];if(&quot;.&quot;===e){const d=new Va(a,b.slice(1),c);return d.parts}if(&quot;@&quot;===e)return[new Ya(a,b.slice(1),d.eventContext)];if(&quot;?&quot;===e)return[new Ua(a,b.slice(1),c)];const f=new Ra(a,b,c);return f.parts}handleTextExpression(a){return new Ta(a)}},_a=new Map,ab=new WeakMap,bb=(a,b,c)=&gt;{let d=ab.get(b);d===void 0&amp;&amp;(Ca(b,b.firstChild),ab.set(b,d=new Ta(Object.assign({templateFactory:E},c))),d.appendInto(b)),d.setValue(a),d.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push(&quot;1.0.0&quot;);const cb=(a,...b)=&gt;new Oa(a,b,&quot;html&quot;,$a),db=(a,...b)=&gt;new Pa(a,b,&quot;svg&quot;,$a),eb=133,fb=a=&gt;{let b=11===a.nodeType?0:1;for(const c=document.createTreeWalker(a,eb,null,!1);c.nextNode();)b++;return b},gb=(a,b=-1)=&gt;{for(let c=b+1;c&lt;a.length;c++){const b=a[c];if(Ka(b))return c}return-1},hb=(a,b)=&gt;&quot;&quot;.concat(a,&quot;--&quot;).concat(b);let ib=!0;&quot;undefined&quot;==typeof window.ShadyCSS?ib=!1:&quot;undefined&quot;==typeof window.ShadyCSS.prepareTemplateDom&amp;&amp;(console.warn(&quot;Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1.&quot;),ib=!1);const jb=a=&gt;b=&gt;{const c=hb(b.type,a);let d=_a.get(c);void 0===d&amp;&amp;(d={stringsArray:new WeakMap,keyString:new Map},_a.set(c,d));let e=d.stringsArray.get(b.strings);if(void 0!==e)return e;const f=b.strings.join(Fa);if(e=d.keyString.get(f),void 0===e){const c=b.getTemplateElement();ib&amp;&amp;window.ShadyCSS.prepareTemplateDom(c,a),e=new Ja(b,c),d.keyString.set(f,e)}return d.stringsArray.set(b.strings,e),e},kb=[&quot;html&quot;,&quot;svg&quot;],lb=a=&gt;{kb.forEach(b=&gt;{const c=_a.get(hb(b,a));c!==void 0&amp;&amp;c.keyString.forEach(a=&gt;{const{element:{content:b}}=a,c=new Set;Array.from(b.querySelectorAll(&quot;style&quot;)).forEach(a=&gt;{c.add(a)}),G(a,c)})})},mb=new Set,nb=(a,b,c)=&gt;{mb.add(c);const d=a.querySelectorAll(&quot;style&quot;);if(0===d.length)return void window.ShadyCSS.prepareTemplateStyles(b.element,c);const e=document.createElement(&quot;style&quot;);for(let f=0;f&lt;d.length;f++){const a=d[f];a.parentNode.removeChild(a),e.textContent+=a.textContent}if(lb(c),I(b,e,b.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(b.element,c),window.ShadyCSS.nativeShadow){const c=b.element.content.querySelector(&quot;style&quot;);a.insertBefore(c.cloneNode(!0),a.firstChild)}else{b.element.content.insertBefore(e,b.element.content.firstChild);const a=new Set;a.add(e),G(b,a)}},ob=(a,b,c)=&gt;{const d=c.scopeName,e=ab.has(b),f=b instanceof ShadowRoot&amp;&amp;ib&amp;&amp;a instanceof Oa,g=f&amp;&amp;!mb.has(d),h=g?document.createDocumentFragment():b;if(bb(a,h,Object.assign({templateFactory:jb(d)},c)),g){const a=ab.get(h);ab.delete(h),a.value instanceof Na&amp;&amp;nb(h,a.value.template,d),Ca(b,b.firstChild),b.appendChild(h),ab.set(b,a)}!e&amp;&amp;f&amp;&amp;window.ShadyCSS.styleElement(b.host)};window.JSCompiler_renameProperty=a=&gt;a;const pb={toAttribute(a,b){return b===Boolean?a?&quot;&quot;:null:b===Object||b===Array?null==a?a:JSON.stringify(a):a},fromAttribute(a,b){return b===Boolean?null!==a:b===Number?null===a?null:+a:b===Object||b===Array?JSON.parse(a):a}},qb=(a,b)=&gt;b!==a&amp;&amp;(b===b||a===a),rb={attribute:!0,type:String,converter:pb,reflect:!1,hasChanged:qb},sb=Promise.resolve(!0),tb=1,ub=4,vb=8,wb=16,xb=32;class yb extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=sb,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const a=[];return this._classProperties.forEach((b,c)=&gt;{const d=this._attributeNameForProperty(c,b);void 0!==d&amp;&amp;(this._attributeToPropertyMap.set(d,c),a.push(d))}),a}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(&quot;_classProperties&quot;,this))){this._classProperties=new Map;const a=Object.getPrototypeOf(this)._classProperties;a!==void 0&amp;&amp;a.forEach((a,b)=&gt;this._classProperties.set(b,a))}}static createProperty(a,b=rb){if(this._ensureClassProperties(),this._classProperties.set(a,b),b.noAccessor||this.prototype.hasOwnProperty(a))return;const c=&quot;symbol&quot;==typeof a?Symbol():&quot;__&quot;.concat(a);Object.defineProperty(this.prototype,a,{get(){return this[c]},set(b){const d=this[a];this[c]=b,this._requestUpdate(a,d)},configurable:!0,enumerable:!0})}static finalize(){if(!(this.hasOwnProperty(JSCompiler_renameProperty(&quot;finalized&quot;,this))&amp;&amp;this.finalized)){const a=Object.getPrototypeOf(this);if(&quot;function&quot;==typeof a.finalize&amp;&amp;a.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty(&quot;properties&quot;,this))){const a=this.properties,b=[].concat(H(Object.getOwnPropertyNames(a)),H(&quot;function&quot;==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a):[]));for(const c of b)this.createProperty(c,a[c])}}}static _attributeNameForProperty(a,b){const c=b.attribute;return!1===c?void 0:&quot;string&quot;==typeof c?c:&quot;string&quot;==typeof a?a.toLowerCase():void 0}static _valueHasChanged(a,b,c=qb){return c(a,b)}static _propertyValueFromAttribute(a,b){const c=b.type,d=b.converter||pb,e=&quot;function&quot;==typeof d?d:d.fromAttribute;return e?e(a,c):a}static _propertyValueToAttribute(a,b){if(void 0===b.reflect)return;const c=b.type,d=b.converter,e=d&amp;&amp;d.toAttribute||pb.toAttribute;return e(a,c)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((a,b)=&gt;{if(this.hasOwnProperty(b)){const a=this[b];delete this[b],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(b,a)}})}_applyInstanceProperties(){this._instanceProperties.forEach((a,b)=&gt;this[b]=a),this._instanceProperties=void 0}connectedCallback(){this._updateState|=xb,this._hasConnectedResolver&amp;&amp;(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(a,b,c){b!==c&amp;&amp;this._attributeToProperty(a,c)}_propertyToAttribute(a,b,c=rb){const d=this.constructor,e=d._attributeNameForProperty(a,c);if(e!==void 0){const a=d._propertyValueToAttribute(b,c);if(a===void 0)return;this._updateState|=vb,null==a?this.removeAttribute(e):this.setAttribute(e,a),this._updateState&amp;=~vb}}_attributeToProperty(a,b){if(this._updateState&amp;vb)return;const c=this.constructor,d=c._attributeToPropertyMap.get(a);if(d!==void 0){const a=c._classProperties.get(d)||rb;this._updateState|=wb,this[d]=c._propertyValueFromAttribute(b,a),this._updateState&amp;=~wb}}_requestUpdate(a,b){let c=!0;if(a!==void 0){const d=this.constructor,e=d._classProperties.get(a)||rb;d._valueHasChanged(this[a],b,e.hasChanged)?(!this._changedProperties.has(a)&amp;&amp;this._changedProperties.set(a,b),!0===e.reflect&amp;&amp;!(this._updateState&amp;wb)&amp;&amp;(this._reflectingProperties===void 0&amp;&amp;(this._reflectingProperties=new Map),this._reflectingProperties.set(a,e))):c=!1}!this._hasRequestedUpdate&amp;&amp;c&amp;&amp;this._enqueueUpdate()}requestUpdate(a,b){return this._requestUpdate(a,b),this.updateComplete}async _enqueueUpdate(){this._updateState|=ub;let a,b;const c=this._updatePromise;this._updatePromise=new Promise((c,d)=&gt;{a=c,b=d});try{await c}catch(a){}this._hasConnected||(await new Promise(a=&gt;this._hasConnectedResolver=a));try{const a=this.performUpdate();null!=a&amp;&amp;(await a)}catch(a){b(a)}a(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&amp;xb}get _hasRequestedUpdate(){return this._updateState&amp;ub}get hasUpdated(){return this._updateState&amp;tb}performUpdate(){this._instanceProperties&amp;&amp;this._applyInstanceProperties();let a=!1;const b=this._changedProperties;try{a=this.shouldUpdate(b),a&amp;&amp;this.update(b)}catch(b){throw a=!1,b}finally{this._markUpdated()}a&amp;&amp;(!(this._updateState&amp;tb)&amp;&amp;(this._updateState|=tb,this.firstUpdated(b)),this.updated(b))}_markUpdated(){this._changedProperties=new Map,this._updateState&amp;=~ub}get updateComplete(){return this._updatePromise}shouldUpdate(a){return!0}update(a){this._reflectingProperties!==void 0&amp;&amp;0&lt;this._reflectingProperties.size&amp;&amp;(this._reflectingProperties.forEach((a,b)=&gt;this._propertyToAttribute(b,this[b],a)),this._reflectingProperties=void 0)}updated(a){}firstUpdated(a){}}yb.finalized=!0;const zb=&quot;adoptedStyleSheets&quot;in Document.prototype&amp;&amp;&quot;replace&quot;in CSSStyleSheet.prototype,Ab=Symbol();class Bb{constructor(a,b){if(b!==Ab)throw new Error(&quot;CSSResult is not constructable. Use `unsafeCSS` or `css` instead.&quot;);this.cssText=a}get styleSheet(){return void 0===this._styleSheet&amp;&amp;(zb?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Cb=a=&gt;{if(a instanceof Bb)return a.cssText;throw new Error(&quot;Value passed to &#39;css&#39; function must be a &#39;css&#39; function result: &quot;.concat(a,&quot;. Use &#39;unsafeCSS&#39; to pass non-literal values, but\n            take care to ensure page security.&quot;))};(window.litElementVersions||(window.litElementVersions=[])).push(&quot;2.0.1&quot;);const Db=a=&gt;a.flat?a.flat(1/0):J(a);class Eb extends yb{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty(&quot;styles&quot;,this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const a=this.styles,b=[];if(Array.isArray(a)){const c=Db(a),d=c.reduceRight((a,b)=&gt;(a.add(b),a),new Set);d.forEach(a=&gt;b.unshift(a))}else a&amp;&amp;b.push(a);return b}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&amp;&amp;this.renderRoot instanceof window.ShadowRoot&amp;&amp;this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:&quot;open&quot;})}adoptStyles(){const a=this.constructor._styles;0===a.length||(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?zb?this.renderRoot.adoptedStyleSheets=a.map(a=&gt;a.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(a.map(a=&gt;a.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&amp;&amp;window.ShadyCSS!==void 0&amp;&amp;window.ShadyCSS.styleElement(this)}update(a){super.update(a);const b=this.render();b instanceof Oa&amp;&amp;this.constructor.render(b,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&amp;&amp;(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(a=&gt;{const b=document.createElement(&quot;style&quot;);b.textContent=a.cssText,this.renderRoot.appendChild(b)}))}render(){}}Eb.finalized=!0,Eb.render=ob;var Fb=function(){try{if(&quot;undefined&quot;!=typeof indexedDB)return indexedDB;if(&quot;undefined&quot;!=typeof webkitIndexedDB)return webkitIndexedDB;if(&quot;undefined&quot;!=typeof mozIndexedDB)return mozIndexedDB;if(&quot;undefined&quot;!=typeof OIndexedDB)return OIndexedDB;if(&quot;undefined&quot;!=typeof msIndexedDB)return msIndexedDB}catch(a){}}();&quot;undefined&quot;==typeof Promise&amp;&amp;require(&quot;lie/polyfill&quot;);const Gb=&quot;local-forage-detect-blob-support&quot;;let Hb;const Ib={},Jb=Object.prototype.toString,Kb=&quot;readonly&quot;,Lb=&quot;readwrite&quot;;var Mb={_driver:&quot;asyncStorage&quot;,_initStorage:function(a){function b(){return Promise.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=Ib[d.name];f||(f=ga(),Ib[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=da);for(var g,h=[],i=0;i&lt;f.forages.length;i++)g=f.forages[i],g!==c&amp;&amp;h.push(g._initReady().catch(b));var l=f.forages.slice(0);return Promise.all(h).then(function(){return d.db=f.db,Z(d)}).then(function(a){return d.db=a,_(d,c._defaultConfig.version)?$(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b,e=0;e&lt;l.length;e++)b=l[e],b!==c&amp;&amp;(b._dbInfo.db=d.db,b._dbInfo.version=d.version)})},_support:function(){try{if(!Fb)return!1;var a=&quot;undefined&quot;!=typeof openDatabase&amp;&amp;/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&amp;&amp;!/Chrome/.test(navigator.userAgent)&amp;&amp;!/BlackBerry/.test(navigator.platform),b=&quot;function&quot;==typeof fetch&amp;&amp;-1!==fetch.toString().indexOf(&quot;[native code&quot;);return(!a||b)&amp;&amp;&quot;undefined&quot;!=typeof indexedDB&amp;&amp;&quot;undefined&quot;!=typeof IDBKeyRange}catch(a){return!1}}(),iterate:function(a,b){var c=this,d=new Promise(function(b,d){c.ready().then(function(){fa(c._dbInfo,Kb,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;ca(d)&amp;&amp;(d=ba(d));var e=a(d,c.key,i++);void 0===e?c.continue():b(e)}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return L(d,b),d},getItem:function(a,b){var c=this;a=N(a);var d=new Promise(function(b,d){c.ready().then(function(){fa(c._dbInfo,Kb,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&amp;&amp;(a=null),ca(a)&amp;&amp;(a=ba(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return L(d,b),d},setItem:function(a,b,c){var d=this;a=N(a);var e=new Promise(function(c,f){var g;d.ready().then(function(){return g=d._dbInfo,&quot;[object Blob]&quot;===Jb.call(b)?R(g.db).then(function(a){return a?b:aa(b)}):b}).then(function(b){fa(d._dbInfo,Lb,function(e,g){if(e)return f(e);try{var h=g.objectStore(d._dbInfo.storeName);null===b&amp;&amp;(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&amp;&amp;(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;f(a)}}catch(a){f(a)}})}).catch(f)});return L(e,c),e},removeItem:function(a,b){var c=this;a=N(a);var d=new Promise(function(b,d){c.ready().then(function(){fa(c._dbInfo,Lb,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.delete(a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})}).catch(d)});return L(d,b),d},clear:function(a){var b=this,c=new Promise(function(a,c){b.ready().then(function(){fa(b._dbInfo,Lb,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})}).catch(c)});return L(c,a),c},length:function(a){var b=this,c=new Promise(function(a,c){b.ready().then(function(){fa(b._dbInfo,Kb,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return L(c,a),c},key:function(a,b){var c=this,d=new Promise(function(b,d){return 0&gt;a?void b(null):void c.ready().then(function(){fa(c._dbInfo,Kb,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openCursor();i.onsuccess=function(){var c=i.result;return c?void(0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))):void b(null)},i.onerror=function(){d(i.error)}}catch(a){d(a)}})}).catch(d)});return L(d,b),d},keys:function(a){var b=this,c=new Promise(function(a,c){b.ready().then(function(){fa(b._dbInfo,Kb,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openCursor(),h=[];g.onsuccess=function(){var b=g.result;return b?void(h.push(b.key),b.continue()):void a(h)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return L(c,a),c},dropInstance:function(a,b){b=O.apply(this,arguments);var c=this.config();a=&quot;function&quot;!=typeof a&amp;&amp;a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(!a.name)d=Promise.reject(&quot;Invalid arguments&quot;);else{const b=a.name===c.name&amp;&amp;e._dbInfo.db,f=b?Promise.resolve(e._dbInfo.db):Z(a).then(b=&gt;{const c=Ib[a.name],d=c.forages;c.db=b;for(var e=0;e&lt;d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?f.then(b=&gt;{if(!b.objectStoreNames.contains(a.storeName))return;const c=b.version+1;S(a);const d=Ib[a.name],e=d.forages;b.close();for(let a=0;a&lt;e.length;a++){const b=e[a];b._dbInfo.db=null,b._dbInfo.version=c}const f=new Promise((b,d)=&gt;{const e=Fb.open(a.name,c);e.onerror=a=&gt;{const b=e.result;b.close(),d(a)},e.onupgradeneeded=()=&gt;{var b=e.result;b.deleteObjectStore(a.storeName)},e.onsuccess=()=&gt;{const a=e.result;a.close(),b(a)}});return f.then(a=&gt;{d.db=a;for(let b=0;b&lt;e.length;b++){const c=e[b];c._dbInfo.db=a,T(c._dbInfo)}}).catch(b=&gt;{throw(U(a,b)||Promise.resolve()).catch(()=&gt;{}),b})}):f.then(b=&gt;{S(a);const c=Ib[a.name],d=c.forages;b.close();for(var e=0;e&lt;d.length;e++){const a=d[e];a._dbInfo.db=null}const f=new Promise((b,c)=&gt;{var d=Fb.deleteDatabase(a.name);d.onerror=d.onblocked=a=&gt;{const b=d.result;b&amp;&amp;b.close(),c(a)},d.onsuccess=()=&gt;{const a=d.result;a&amp;&amp;a.close(),b(a)}});return f.then(a=&gt;{c.db=a;for(var b=0;b&lt;d.length;b++){const a=d[b];T(a._dbInfo)}}).catch(b=&gt;{throw(U(a,b)||Promise.resolve()).catch(()=&gt;{}),b})})}return L(d,b),d}},Nb=/^~~local_forage_type~([^~]+)~/,Ob=&quot;__lfsc__:&quot;.length,Pb=Ob+&quot;arbf&quot;.length,Qb=Object.prototype.toString,Rb={serialize:function(a,b){var c=&quot;&quot;;if(a&amp;&amp;(c=Qb.call(a)),a&amp;&amp;(&quot;[object ArrayBuffer]&quot;===c||a.buffer&amp;&amp;&quot;[object ArrayBuffer]&quot;===Qb.call(a.buffer))){var d,e=&quot;__lfsc__:&quot;;a instanceof ArrayBuffer?(d=a,e+=&quot;arbf&quot;):(d=a.buffer,&quot;[object Int8Array]&quot;===c?e+=&quot;si08&quot;:&quot;[object Uint8Array]&quot;===c?e+=&quot;ui08&quot;:&quot;[object Uint8ClampedArray]&quot;===c?e+=&quot;uic8&quot;:&quot;[object Int16Array]&quot;===c?e+=&quot;si16&quot;:&quot;[object Uint16Array]&quot;===c?e+=&quot;ur16&quot;:&quot;[object Int32Array]&quot;===c?e+=&quot;si32&quot;:&quot;[object Uint32Array]&quot;===c?e+=&quot;ui32&quot;:&quot;[object Float32Array]&quot;===c?e+=&quot;fl32&quot;:&quot;[object Float64Array]&quot;===c?e+=&quot;fl64&quot;:b(new Error(&quot;Failed to get type for BinaryArray&quot;))),b(e+ia(d))}else if(&quot;[object Blob]&quot;===c){var f=new FileReader;f.onload=function(){var c=&quot;~~local_forage_type~&quot;+a.type+&quot;~&quot;+ia(this.result);b(&quot;__lfsc__:blob&quot;+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error(&quot;Couldn&#39;t convert value into a JSON string: &quot;,a),b(null,c)}},deserialize:function(a){if(a.substring(0,Ob)!==&quot;__lfsc__:&quot;)return JSON.parse(a);var b,c=a.substring(Pb),d=a.substring(Ob,Pb);if(d===&quot;blob&quot;&amp;&amp;Nb.test(c)){var e=c.match(Nb);b=e[1],c=c.substring(e[0].length)}var f=ha(c);switch(d){case&quot;arbf&quot;:return f;case&quot;blob&quot;:return K([f],{type:b});case&quot;si08&quot;:return new Int8Array(f);case&quot;ui08&quot;:return new Uint8Array(f);case&quot;uic8&quot;:return new Uint8ClampedArray(f);case&quot;si16&quot;:return new Int16Array(f);case&quot;ur16&quot;:return new Uint16Array(f);case&quot;si32&quot;:return new Int32Array(f);case&quot;ui32&quot;:return new Uint32Array(f);case&quot;fl32&quot;:return new Float32Array(f);case&quot;fl64&quot;:return new Float64Array(f);default:throw new Error(&quot;Unkown type: &quot;+d);}},stringToBuffer:ha,bufferToString:ia},Sb={_driver:&quot;webSQLStorage&quot;,_initStorage:function(a){var b=this,c={db:null};if(a)for(var d in a)c[d]=&quot;string&quot;==typeof a[d]?a[d]:a[d].toString();var e=new Promise(function(a,d){try{c.db=openDatabase(c.name,c.version+&quot;&quot;,c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){ja(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Rb,e},_support:function(){return&quot;function&quot;==typeof openDatabase}(),iterate:function(a,b){var c=this,d=new Promise(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){ka(c,e,&quot;SELECT * FROM &quot;.concat(e.storeName),[],function(c,d){for(var f=d.rows,g=f.length,h=0;h&lt;g;h++){var j=f.item(h),k=j.value;if(k&amp;&amp;(k=e.serializer.deserialize(k)),k=a(k,j.key,h+1),void 0!==k)return void b(k)}b()},function(a,b){d(b)})})}).catch(d)});return L(d,b),d},getItem:function(a,b){var c=this;a=N(a);var d=new Promise(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){ka(c,e,&quot;SELECT * FROM &quot;.concat(e.storeName,&quot; WHERE key = ? LIMIT 1&quot;),[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&amp;&amp;(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})}).catch(d)});return L(d,b),d},setItem:function(a,b,c){return la.apply(this,[a,b,c,1])},removeItem:function(a,b){var c=this;a=N(a);var d=new Promise(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){ka(c,e,&quot;DELETE FROM &quot;.concat(e.storeName,&quot; WHERE key = ?&quot;),[a],function(){b()},function(a,b){d(b)})})}).catch(d)});return L(d,b),d},clear:function(a){var b=this,c=new Promise(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){ka(b,d,&quot;DELETE FROM &quot;.concat(d.storeName),[],function(){a()},function(a,b){c(b)})})}).catch(c)});return L(c,a),c},length:function(a){var b=this,c=new Promise(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){ka(b,d,&quot;SELECT COUNT(key) as c FROM &quot;.concat(d.storeName),[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})}).catch(c)});return L(c,a),c},key:function(a,b){var c=this,d=new Promise(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){ka(c,e,&quot;SELECT key FROM &quot;.concat(e.storeName,&quot; WHERE id = ? LIMIT 1&quot;),[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})}).catch(d)});return L(d,b),d},keys:function(a){var b=this,c=new Promise(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){ka(b,d,&quot;SELECT key FROM &quot;.concat(d.storeName),[],function(b,c){for(var d=[],e=0;e&lt;c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})}).catch(c)});return L(c,a),c},dropInstance:function(a,b){b=O.apply(this,arguments);var c=this.config();a=&quot;function&quot;!=typeof a&amp;&amp;a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new Promise(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,&quot;&quot;,&quot;&quot;,0),a.storeName?b({db:d,storeNames:[a.storeName]}):b(ma(d))}).then(function(a){return new Promise(function(b,c){a.db.transaction(function(d){function e(a){return new Promise(function(b,c){d.executeSql(&quot;DROP TABLE IF EXISTS &quot;.concat(a),[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g&lt;h;g++)f.push(e(a.storeNames[g]));Promise.all(f).then(function(){b()}).catch(function(a){c(a)})},function(a){c(a)})})}):Promise.reject(&quot;Invalid arguments&quot;),L(d,b),d}},Tb={_driver:&quot;localStorageWrapper&quot;,_initStorage:function(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return(c.keyPrefix=oa(a,b._defaultConfig),!qa())?Promise.reject():(b._dbInfo=c,c.serializer=Rb,Promise.resolve())},_support:na(),iterate:function(a,b){var c=this,d=c.ready().then(function(){for(var b,d=c._dbInfo,e=d.keyPrefix,f=e.length,g=localStorage.length,h=1,j=0;j&lt;g;j++)if(b=localStorage.key(j),0===b.indexOf(e)){var k=localStorage.getItem(b);if(k&amp;&amp;(k=d.serializer.deserialize(k)),k=a(k,b.substring(f),h++),void 0!==k)return k}});return L(d,b),d},getItem:function(a,b){var c=this;a=N(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&amp;&amp;(d=b.serializer.deserialize(d)),d});return L(d,b),d},setItem:function(a,b,c){var d=this;a=N(a);var e=d.ready().then(function(){void 0===b&amp;&amp;(b=null);var c=b;return new Promise(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){(&quot;QuotaExceededError&quot;===a.name||&quot;NS_ERROR_DOM_QUOTA_REACHED&quot;===a.name)&amp;&amp;f(a),f(a)}})})});return L(e,c),e},removeItem:function(a,b){var c=this;a=N(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return L(d,b),d},clear:function(a){var b=this,c=b.ready().then(function(){for(var a,c=b._dbInfo.keyPrefix,d=localStorage.length-1;0&lt;=d;d--)a=localStorage.key(d),0===a.indexOf(c)&amp;&amp;localStorage.removeItem(a)});return L(c,a),c},length:function(a){var b=this,c=b.keys().then(function(a){return a.length});return L(c,a),c},key:function(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&amp;&amp;(b=b.substring(d.keyPrefix.length)),b});return L(d,b),d},keys:function(a){var b=this,c=b.ready().then(function(){for(var a,c=b._dbInfo,d=localStorage.length,e=[],f=0;f&lt;d;f++)a=localStorage.key(f),0===a.indexOf(c.keyPrefix)&amp;&amp;e.push(a.substring(c.keyPrefix.length));return e});return L(c,a),c},dropInstance:function(a,b){if(b=O.apply(this,arguments),a=&quot;function&quot;!=typeof a&amp;&amp;a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new Promise(function(b){a.storeName?b(oa(a,e._defaultConfig)):b(&quot;&quot;.concat(a.name,&quot;/&quot;))}).then(function(a){for(var b,c=localStorage.length-1;0&lt;=c;c--)b=localStorage.key(c),0===b.indexOf(a)&amp;&amp;localStorage.removeItem(b)}):Promise.reject(&quot;Invalid arguments&quot;),L(d,b),d}};const Ub=(a,b)=&gt;a===b||&quot;number&quot;==typeof a&amp;&amp;&quot;number&quot;==typeof b&amp;&amp;isNaN(a)&amp;&amp;isNaN(b),Vb=(a,b)=&gt;{const c=a.length;for(let d=0;d&lt;c;){if(Ub(a[d],b))return!0;d++}return!1},Wb=Array.isArray||function(a){return&quot;[object Array]&quot;===Object.prototype.toString.call(a)},Xb={},Yb={},Zb={INDEXEDDB:Mb,WEBSQL:Sb,LOCALSTORAGE:Tb},$b=[Zb.INDEXEDDB._driver,Zb.WEBSQL._driver,Zb.LOCALSTORAGE._driver],_b=[&quot;dropInstance&quot;],ac=[&quot;clear&quot;,&quot;getItem&quot;,&quot;iterate&quot;,&quot;key&quot;,&quot;keys&quot;,&quot;length&quot;,&quot;removeItem&quot;,&quot;setItem&quot;].concat(_b),bc={description:&quot;&quot;,driver:$b.slice(),name:&quot;localforage&quot;,size:4980736,storeName:&quot;keyvaluepairs&quot;,version:1};class cc{constructor(a){for(let b in Zb)if(Zb.hasOwnProperty(b)){const a=Zb[b],c=a._driver;this[b]=c,Xb[c]||this.defineDriver(a)}this._defaultConfig=sa({},bc),this._config=sa({},this._defaultConfig,a),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=&gt;{})}config(a){if(&quot;object&quot;==typeof a){if(this._ready)return new Error(&quot;Can&#39;t call config() after localforage has been used.&quot;);for(let b in a){if(&quot;storeName&quot;==b&amp;&amp;(a[b]=a[b].replace(/\W/g,&quot;_&quot;)),&quot;version&quot;==b&amp;&amp;&quot;number&quot;!=typeof a[b])return new Error(&quot;Database version must be a number.&quot;);this._config[b]=a[b]}return!(&quot;driver&quot;in a&amp;&amp;a.driver)||this.setDriver(this._config.driver)}return&quot;string&quot;==typeof a?this._config[a]:this._config}defineDriver(a,b,c){const d=new Promise(function(b,c){try{const d=a._driver,e=new Error(&quot;Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver&quot;);if(!a._driver)return void c(e);const f=ac.concat(&quot;_initStorage&quot;);for(let b=0,d=f.length;b&lt;d;b++){const d=f[b],g=!Vb(_b,d);if((g||a[d])&amp;&amp;&quot;function&quot;!=typeof a[d])return void c(e)}(function(){const b=function(a){return function(){const b=new Error(&quot;Method &quot;.concat(a,&quot; is not implemented by the current driver&quot;)),c=Promise.reject(b);return L(c,arguments[arguments.length-1]),c}};for(let c=0,d=_b.length;c&lt;d;c++){const d=_b[c];a[d]||(a[d]=b(d))}})();const g=function(c){Xb[d]&amp;&amp;console.info(&quot;Redefining LocalForage driver: &quot;.concat(d)),Xb[d]=a,Yb[d]=c,b()};&quot;_support&quot;in a?a._support&amp;&amp;&quot;function&quot;==typeof a._support?a._support().then(g,c):g(!!a._support):g(!0)}catch(a){c(a)}});return M(d,b,c),d}driver(){return this._driver||null}getDriver(a,b,c){const d=Xb[a]?Promise.resolve(Xb[a]):Promise.reject(new Error(&quot;Driver not found.&quot;));return M(d,b,c),d}getSerializer(a){const b=Promise.resolve(Rb);return M(b,a),b}ready(a){const b=this,c=b._driverSet.then(()=&gt;(null===b._ready&amp;&amp;(b._ready=b._initDriver()),b._ready));return M(c,a,a),c}setDriver(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c&lt;a.length;){let d=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(d).then(e).catch(b)}d();const f=new Error(&quot;No available storage method found.&quot;);return g._driverSet=Promise.reject(f),g._driverSet}let c=0;return b()}}const g=this;Wb(a)||(a=[a]);const h=this._getSupportedDrivers(a),i=null===this._driverSet?Promise.resolve():this._driverSet.catch(()=&gt;Promise.resolve());return this._driverSet=i.then(()=&gt;{const a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(a=&gt;{g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})}).catch(()=&gt;{d();const a=new Error(&quot;No available storage method found.&quot;);return g._driverSet=Promise.reject(a),g._driverSet}),M(this._driverSet,b,c),this._driverSet}supports(a){return!!Yb[a]}_extend(a){sa(this,a)}_getSupportedDrivers(a){const b=[];for(let c=0,d=a.length;c&lt;d;c++){const d=a[c];this.supports(d)&amp;&amp;b.push(d)}return b}_wrapLibraryMethodsWithReady(){for(let a=0,b=ac.length;a&lt;b;a++)ra(this,ac[a])}createInstance(a){return new cc(a)}}var dc=new cc;const ec=&quot;https://github.com/kalkih/mini-graph-card/blob/master/README.md&quot;,fc=14,gc=96,hc={humidity:&quot;hass:water-percent&quot;,illuminance:&quot;hass:brightness-5&quot;,temperature:&quot;hass:thermometer&quot;,battery:&quot;hass:battery&quot;},ic=[&quot;var(--accent-color)&quot;,&quot;#3498db&quot;,&quot;#e74c3c&quot;,&quot;#9b59b6&quot;,&quot;#f1c40f&quot;,&quot;#2ecc71&quot;],jc=[&quot;entity&quot;,&quot;line&quot;,&quot;length&quot;,&quot;fill&quot;,&quot;points&quot;,&quot;tooltip&quot;,&quot;abs&quot;],kc={name:!0,icon:!0,state:!0,graph:&quot;line&quot;,labels:&quot;hover&quot;,extrema:!1,legend:!0,fill:!0,points:&quot;hover&quot;},lc=0,X=1,Y=2,V=(a,b)=&gt;a.reduce((a,c)=&gt;+c[b]&lt;+a[b]?c:a,a[0]),mc=(a,b)=&gt;a.reduce((a,c)=&gt;+c[b]&gt;+a[b]?c:a,a[0]),nc=(a,b,c=&quot;en-US&quot;)=&gt;a.toLocaleString(c,F({hour:&quot;numeric&quot;,minute:&quot;numeric&quot;},b)),oc=a=&gt;a*3600*1000,pc=(c,a,b)=&gt;{const d=+c.replace(&quot;#&quot;,&quot;0x&quot;),e=d&gt;&gt;16,f=255&amp;d&gt;&gt;8,g=255&amp;d,h=+a.replace(&quot;#&quot;,&quot;0x&quot;);return&quot;#&quot;.concat((0|16777216+(e+b*((h&gt;&gt;16)-e)&lt;&lt;16)+(f+b*((255&amp;h&gt;&gt;8)-f)&lt;&lt;8)+(g+b*((255&amp;h)-g))).toString(16).slice(1))};class qc{constructor(a,b,c,d=24,e=1){this.coords=[],this.width=a-2*c[lc],this.height=b-2*c[X],this.margin=c,this._max=0,this._min=0,this.points=e,this.hours=d}get max(){return this._max}set max(a){this._max=a}get min(){return this._min}set min(a){this._min=a}update(a){const b=new Date().getTime(),c=(a,c)=&gt;{var d=Math.floor;const e=b-new Date(c.last_changed).getTime(),f=e/3600000*this.points-this.hours*this.points,g=d(xa(f));return a[g]||(a[g]=[]),a[g].push(c),a},d=a.reduce((a,b)=&gt;c(a,b),[]);d.length=wa(this.hours*this.points),this.coords=this._calcPoints(d),this.min=va.apply(Math,H(this.coords.map(a=&gt;+a[Y]))),this.max=ua.apply(Math,H(this.coords.map(a=&gt;+a[Y])))}_calcPoints(a){var b=Number.isFinite;const c=[];let d=this.width/(this.hours*this.points-1);d=b(d)?d:this.width;const e=a.filter(Boolean)[0];let f=[this._average(e),this._last(e)];const g=(a,b)=&gt;{const e=d*b+this.margin[lc];return a&amp;&amp;(f=[this._average(a),this._last(a)]),c.push([e,0,a?f[0]:f[1]])};for(let b=0;b&lt;a.length;b+=1)g(a[b],b);return 1===c.length&amp;&amp;(c[1]=[this.width+this.margin[lc],0,c[0][Y]]),c}_calcY(a){const b=(this.max-this.min)/this.height||1;return a.map(a=&gt;[a[lc],this.height-(a[Y]-this.min)/b+1*this.margin[X],a[Y]])}getPoints(){const a=this._calcY(this.coords);let b,c,d=a[0];a.shift();const e=a.map((a,e)=&gt;{b=a,c=this._midPoint(d[lc],d[X],b[lc],b[X]);const f=(b[Y]+d[Y])/2;return d=b,[c[lc],c[X],f,e+1]});return e}getPath(){const a=this._calcY(this.coords);let b,c,d=&quot;&quot;,e=a[0];return d+=&quot;M&quot;.concat(e[lc],&quot;,&quot;).concat(e[X]),a.forEach(a=&gt;{b=a,c=this._midPoint(e[lc],e[X],b[lc],b[X]),d+=&quot; &quot;.concat(c[lc],&quot;,&quot;).concat(c[X]),d+=&quot; Q &quot;.concat(b[lc],&quot;,&quot;).concat(b[X]),e=b}),d+=&quot; &quot;.concat(b[lc],&quot;,&quot;).concat(b[X]),d}computeGradient(a){const b=this._max-this._min;return a.map((a,c,d)=&gt;{let e;if(a.value&gt;this._max&amp;&amp;d[c+1]){const b=(this._max-d[c+1].value)/(a.value-d[c+1].value);e=pc(d[c+1].color,a.color,b)}else if(a.value&lt;this._min&amp;&amp;d[c-1]){const b=(d[c-1].value-this._min)/(d[c-1].value-a.value);e=pc(d[c-1].color,a.color,b)}return{color:e||a.color,offset:(this._max-a.value)*(100/b)}})}getFill(a){const b=this.height+2*this.margin[X];let c=a;return c+=&quot; L &quot;.concat(this.width-2*this.margin[lc],&quot;, &quot;).concat(b),c+=&quot; L &quot;.concat(this.coords[0][lc],&quot;, &quot;).concat(b,&quot; z&quot;),c}getBars(a,b){const c=this._calcY(this.coords),d=4,e=(this.width-d)/wa(this.hours*this.points)/b;return c.map((c,f)=&gt;({x:e*f*b+e*a+d,y:c[X],height:this.height-c[X]+3*this.margin[X],width:e-d,value:c[Y]}))}_midPoint(a,b,c,d){return[(a-c)/2+c,(b-d)/2+d]}_average(a){return a.reduce((a,b)=&gt;a+parseFloat(b.state),0)/a.length}_last(a){return parseFloat(a[a.length-1].state)||0}}const rc=((a,...b)=&gt;{const c=b.reduce((b,c,d)=&gt;b+Cb(c)+a[d+1],a[0]);return new Bb(c,Ab)})(D());dc.config({name:&quot;mini-graph-card&quot;,version:1,storeName:&quot;entity_history_cache&quot;,description:&quot;Mini graph card uses caching for the entity history&quot;});class sc extends Eb{constructor(){super(),this.id=Math.random().toString(36).substr(2,9),this.bound=[0,0],this.abs=[],this.length=[],this.entity=[],this.line=[],this.bar=[],this.fill=[],this.points=[],this.gradient=[],this.tooltip={},this.updateQueue=[],this.updating=!1,this.stateChanged=!1}static get styles(){return rc}set hass(a){this._hass=a;let b=!1;this.config.entities.forEach((c,d)=&gt;{const e=a.states[c.entity];e&amp;&amp;this.entity[d]!==e&amp;&amp;(this.entity[d]=e,this.updateQueue.push(e.entity_id),b=!0)}),b&amp;&amp;(this.entity=H(this.entity),this.config.update_interval||this.updating?this.stateChanged=!0:this.updateData())}static get properties(){return{id:String,_hass:{},config:{},entity:[],Graph:[],line:[],shadow:[],length:Number,bound:[],abs:[],tooltip:{},updateQueue:[],color:String}}setConfig(a){if(a.entity)throw new Error(&quot;The \&quot;entity\&quot; option was removed, please use \&quot;entities\&quot;.\n See &quot;.concat(ec));if(!Array.isArray(a.entities))throw new Error(&quot;Please provide the \&quot;entities\&quot; option as a list.\n See &quot;.concat(ec));if(a.line_color_above||a.line_color_below)throw new Error(&quot;\&quot;line_color_above/line_color_below\&quot; was removed, please use \&quot;color_thresholds\&quot;.\n See &quot;.concat(ec));const b=F({animate:!1,hour24:!1,font_size:fc,font_size_header:14,height:100,hours_to_show:24,points_per_hour:.5,line_color:[].concat(ic),color_thresholds:[],color_thresholds_transition:&quot;smooth&quot;,line_width:5,more_info:!0},a,{show:F({},kc,a.show)});b.entities.forEach((a,c)=&gt;{&quot;string&quot;==typeof a&amp;&amp;(b.entities[c]={entity:a})}),&quot;string&quot;==typeof a.line_color&amp;&amp;(b.line_color=[a.line_color].concat(ic)),b.font_size=a.font_size/100*fc||fc,b.color_thresholds=this.computeThresholds(b.color_thresholds,b.color_thresholds_transition);const c=24&lt;b.hours_to_show?{day:&quot;numeric&quot;,weekday:&quot;short&quot;}:{};if(b.format=F({hour12:!b.hour24},c),&quot;bar&quot;===b.show.graph){const a=b.entities.length;b.hours_to_show*b.points_per_hour*a&gt;gc&amp;&amp;(b.points_per_hour=gc/(b.hours_to_show*a),console.warn(&quot;mini-graph-card: Not enough space, adjusting points_per_hour to &quot;,b.points_per_hour))}this.Graph||(this.Graph=b.entities.map(()=&gt;new qc(500,b.height,[b.show.fill?0:b.line_width,b.line_width],b.hours_to_show,b.points_per_hour))),this.config=b}connectedCallback(){super.connectedCallback(),this.config.update_interval&amp;&amp;(this.updateOnInterval(),this.interval=setInterval(()=&gt;this.updateOnInterval(),1e3*this.config.update_interval))}disconnectedCallback(){this.interval&amp;&amp;clearInterval(this.interval),super.disconnectedCallback()}shouldUpdate(a){return!!this.entity[0]&amp;&amp;(jc.some(b=&gt;a.has(b))?(this.color=this.intColor(this.tooltip.value||this.entity[0].state,this.tooltip.entity||0),!0):void 0)}updated(a){this.config.animate&amp;&amp;a.has(&quot;line&quot;)&amp;&amp;(this.length.length&lt;this.entity.length?(this.shadowRoot.querySelectorAll(&quot;svg path.line&quot;).forEach(a=&gt;{this.length[a.id]=a.getTotalLength()}),this.length=H(this.length)):this.length=Array(this.entity.length).fill(&quot;none&quot;))}render({config:a}=this){return cb(C(),a.group,a.show.graph&amp;&amp;a.show.fill,&quot;hover&quot;===a.show.points,&quot;hover&quot;===a.show.labels,0&lt;a.color_thresholds.length,a.more_info,a.font_size,a=&gt;this.handlePopup(a,this.entity[0]),this.renderHeader(),this.renderStates(),this.renderGraph(),this.renderInfo())}renderHeader(){const{show:a,align_icon:b,align_header:c,font_size_header:d}=this.config;return a.name||a.icon&amp;&amp;&quot;state&quot;!==b?cb(B(),c,d,this.renderName(),&quot;state&quot;===b?&quot;&quot;:this.renderIcon()):&quot;&quot;}renderIcon(){const{icon:a,icon_adaptive_color:b}=this.config.show;return a?cb(A(),this.config.align_icon,b?&quot;color: &quot;.concat(this.color,&quot;;&quot;):&quot;&quot;,this.computeIcon(this.entity[0])):&quot;&quot;}renderName(){if(!this.config.show.name)return;const a=this.tooltip.entity===void 0?this.config.name||this.computeName(0):this.computeName(this.tooltip.entity),b=this.config.show.name_adaptive_color?&quot;opacity: 1; color: &quot;.concat(this.color,&quot;;&quot;):&quot;&quot;;return cb(z(),b,a)}renderStates(){const{entity:a,value:b}=this.tooltip,c=b===void 0?this.entity[0].state:b,d=this.config.entities[0].state_adaptive_color?&quot;color: &quot;.concat(this.color,&quot;;&quot;):&quot;&quot;;if(this.config.show.state)return cb(y(),this.config.align_state,d,this.computeState(c),d,this.computeUom(a||0),this.renderStateTime(),this.config.entities.map((a,b)=&gt;this.renderState(a,b)),&quot;state&quot;===this.config.align_icon?this.renderIcon():&quot;&quot;)}renderState(a,b){if(a.show_state&amp;&amp;0!==b){const{state:c}=this.entity[b];return cb(x(),a.state_adaptive_color?&quot;color: &quot;.concat(this.computeColor(c,b),&quot;;&quot;):&quot;&quot;,a.show_indicator?this.renderIndicator(c,b):&quot;&quot;,this.computeState(c),this.computeUom(b))}}renderStateTime(){return void 0===this.tooltip.value?void 0:cb(w(),this.tooltip.label?cb(v(),this.tooltip.label):cb(u(),this.tooltip.time[0],this.tooltip.time[1]))}renderGraph(){return this.config.show.graph?cb(t(),this.renderLabels(),this.renderSvg(),this.renderLegend()):&quot;&quot;}renderLegend(){return 1&gt;=this.config.entities.length||!this.config.show.legend?void 0:cb(s(),this.entity.map((a,b)=&gt;cb(r(),b=&gt;this.handlePopup(b,a),()=&gt;this.setTooltip(b,-1,this.entity[b].state,&quot;Current&quot;),()=&gt;this.tooltip={},this.renderIndicator(a.state,b),this.computeName(b))))}renderIndicator(a,b){return db(q(),this.computeColor(a,b))}renderSvgFill(a,b){if(!a)return;const c=this.intColor(this.entity[b].state,b),d=&quot;fade&quot;===this.config.show.fill,e=d?&quot;url(#fill-grad-&quot;.concat(this.id,&quot;-&quot;).concat(b,&quot;)&quot;):c;return db(p(),&quot;fill-grad-&quot;.concat(this.id,&quot;-&quot;).concat(b),c,c,this.tooltip.entity!==void 0&amp;&amp;this.tooltip.entity!==b,this.config.show.fill,b,this.config.animate,this.length[b],this.config.animate?&quot;&quot;.concat(.5*b,&quot;s&quot;):&quot;0s&quot;,e,e,this.config.line_width,this.fill[b])}renderSvgLine(a,b){if(a){const a=db(o(),b,this.config.animate,this.length[b],this.config.animate?&quot;&quot;.concat(.5*b,&quot;s&quot;):&quot;0s&quot;,this.length[b]||&quot;none&quot;,this.length[b]||&quot;none&quot;,&quot;white&quot;,this.config.line_width,this.line[b]);return db(n(),&quot;line-&quot;.concat(this.id,&quot;-&quot;).concat(b),a)}}renderSvgPoint(a,b){const c=this.gradient[b]?this.computeColor(a[Y],b):&quot;inherit&quot;;return db(m(),this.tooltip.index!==a[3],&quot;--mcg-hover: &quot;.concat(c,&quot;;&quot;),c,c,a[lc],a[X],this.config.line_width,()=&gt;this.setTooltip(b,a[3],a[Y]),()=&gt;this.tooltip={})}renderSvgPoints(a,b){if(a){const c=this.computeColor(this.entity[b].state,b);return db(l(),this.tooltip.entity===b,void 0!==this.tooltip.entity&amp;&amp;this.tooltip.entity!==b,this.length[b],this.config.animate&amp;&amp;&quot;hover&quot;!==this.config.show.points,this.config.animate?&quot;&quot;.concat(.5*b+.5,&quot;s&quot;):&quot;0s&quot;,c,c,this.config.line_width/2,a.map(a=&gt;this.renderSvgPoint(a,b)))}}renderSvgGradient(a){if(a){const b=a.map((a,b)=&gt;a?db(k(),&quot;grad-&quot;.concat(this.id,&quot;-&quot;).concat(b),a.map(a=&gt;db(j(),a.color,&quot;&quot;.concat(a.offset,&quot;%&quot;)))):void 0);return db(i(),b)}}renderSvgRect(a,b){if(a){const a=this.gradient[b]?&quot;url(#grad-&quot;.concat(this.id,&quot;-&quot;).concat(b,&quot;)&quot;):this.computeColor(this.entity[b].state,b);return db(h(),void 0!==this.tooltip.entity&amp;&amp;this.tooltip.entity!==b,&quot;rect-&quot;.concat(this.id,&quot;-&quot;).concat(b),a,&quot;url(#line-&quot;.concat(this.id,&quot;-&quot;).concat(b,&quot;)&quot;))}}renderSvgBars(a,b){if(a){const c=a.map((a,c)=&gt;{const d=this.config.animate?db(g(),this.config.height,a.y):&quot;&quot;,e=this.computeColor(a.value,b);return db(f(),a.x,a.y,a.height,a.width,e,()=&gt;this.setTooltip(b,c,a.value),()=&gt;this.tooltip={},d)});return db(e(),this.config.animate,c)}}renderSvg(){const{height:a}=this.config;return db(d(),0===a?0:&quot;100%&quot;,a,a=&gt;a.stopPropagation(),this.renderSvgGradient(this.gradient),this.line.map((a,b)=&gt;this.renderSvgLine(a,b)),this.fill.map((a,b)=&gt;this.renderSvgFill(a,b)),this.line.map((a,b)=&gt;this.renderSvgRect(a,b)),this.bar.map((a,b)=&gt;this.renderSvgBars(a,b)),this.points.map((a,b)=&gt;this.renderSvgPoints(a,b)))}setTooltip(a,b,c,d=null){const{points_per_hour:e,hours_to_show:f,format:g}=this.config,h=1&gt;f&amp;&amp;1&gt;e?e*f:1/e,i=xa(b+1-wa(f*e)),j=new Date;j.setMilliseconds(j.getMilliseconds()-oc(h*i));const k=nc(j,{hour12:!this.config.hour24},this._hass.language);j.setMilliseconds(j.getMilliseconds()-oc(h));const l=nc(j,g,this._hass.language);this.tooltip={value:c,id:i,entity:a,time:[l,k],index:b,label:d}}renderLabels(){return this.config.show.labels?cb(c(),this.computeState(this.bound[1]),this.computeState(this.bound[0])):void 0}renderInfo(){return this.config.show.extrema?cb(b(),this.abs.map(b=&gt;cb(a(),b.type,this.computeState(b.state),this.computeUom(0),nc(new Date(b.last_changed),this.config.format,this._hass.language)))):void 0}handlePopup(a,b){a.stopPropagation(),this.config.more_info&amp;&amp;this.fire(&quot;hass-more-info&quot;,{entityId:b.entity_id})}fire(a,b,c){const d=c||{},f=null===b||void 0===b?{}:b,g=new Event(a,{bubbles:void 0===d.bubbles||d.bubbles,cancelable:!!d.cancelable,composed:void 0===d.composed||d.composed});return g.detail=f,this.dispatchEvent(g),g}computeThresholds(a,b){if(a.sort((c,a)=&gt;a.value-c.value),&quot;smooth&quot;===b)return a;else{var c;const b=(c=[]).concat.apply(c,H(a.map((b,c)=&gt;[b,{value:b.value-1e-4,color:a[c+1]?a[c+1].color:b.color}])));return b}}computeColor(a,b){const{color_thresholds:c,line_color:d}=this.config,e=F({color:d[b]||d[0]},c.slice(-1)[0],c.find(b=&gt;b.value&lt;(+a||0)));return this.config.entities[b].color||e.color}intColor(a,b){const{color_thresholds:c,line_color:d}=this.config,e=+a||0;let f;if(0&lt;c.length)if(&quot;bar&quot;===this.config.show.graph){const{color:a}=c.find(a=&gt;a.value&lt;e)||c.slice(-1)[0];f=a}else{f=c[0].color;const b=c.findIndex(a=&gt;a.value&lt;e),d=c[b],g=c[b-1];if(g){const b=(g.value-a)/(g.value-d.value);f=pc(g.color,d.color,b)}}return this.config.entities[b].color||f||d[b]||d[0]}computeName(a){return this.config.entities[a].name||this.entity[a].attributes.friendly_name}computeIcon(a){return this.config.icon||a.attributes.icon||hc[a.attributes.device_class]||hc.temperature}computeUom(a){return this.config.entities[a].unit||this.config.unit||this.entity[a].attributes.unit_of_measurement||&quot;&quot;}computeState(a){var b=Math.round;const c=+a,d=this.config.decimals;if(d===void 0||ta(d)||ta(c))return b(100*c)/100;const e=10**d;return(b(c*e)/e).toFixed(d)}updateOnInterval(){this.stateChanged&amp;&amp;!this.updating&amp;&amp;(this.stateChanged=!1,this.updateData())}async updateData({config:a}=this){this.updating=!0;const b=new Date,c=new Date;c.setMilliseconds(b.getMilliseconds()-oc(a.hours_to_show));try{const a=this.entity.map((a,d)=&gt;this.updateEntity(a,d,c,b));await Promise.all(a)}finally{this.updating=!1}this.updateQueue=[],this.bound=[a.lower_bound===void 0?va.apply(Math,H(this.Graph.map(a=&gt;a.min)))||this.bound[0]:a.lower_bound,a.upper_bound===void 0?ua.apply(Math,H(this.Graph.map(a=&gt;a.max)))||this.bound[1]:a.upper_bound],a.show.graph&amp;&amp;(this.entity.forEach((b,c)=&gt;{b&amp;&amp;0!==this.Graph[c].coords.length&amp;&amp;([this.Graph[c].min,this.Graph[c].max]=[this.bound[0],this.bound[1]],&quot;bar&quot;===a.show.graph?this.bar[c]=this.Graph[c].getBars(c,a.entities.length):(this.line[c]=this.Graph[c].getPath(),a.show.fill&amp;&amp;(this.fill[c]=this.Graph[c].getFill(this.line[c])),a.show.points&amp;&amp;(this.points[c]=this.Graph[c].getPoints()),0&lt;a.color_thresholds.length&amp;&amp;!a.entities[c].color&amp;&amp;(this.gradient[c]=this.Graph[c].computeGradient(a.color_thresholds))))}),this.line=H(this.line))}async updateEntity(a,b,c,d){if(!a||!this.updateQueue.includes(a.entity_id))return;let e=[],f=c,g=!1;const h=await dc.getItem(a.entity_id);if(h&amp;&amp;h.hours_to_show===this.config.hours_to_show){e=h.data,e=e.filter(a=&gt;new Date(a.last_updated)&gt;c),0&lt;e.length&amp;&amp;(g=!0);const a=new Date(h.last_fetched);a&gt;f&amp;&amp;(f=new Date(a-1))}let i=await this.fetchRecent(a.entity_id,f,d,g);i[0]&amp;&amp;0&lt;i[0].length&amp;&amp;(i=i[0].filter(a=&gt;!ta(parseFloat(a.state))),e=[].concat(H(e),H(i)),dc.setItem(a.entity_id,{hours_to_show:this.config.hours_to_show,last_fetched:d,data:e}).catch(a=&gt;{console.warn(&quot;mini-graph-card: Failed to cache: &quot;,a),dc.clear()}));0===e.length||(a.entity_id===this.entity[0].entity_id&amp;&amp;(this.abs=[F({type:&quot;min&quot;},V(e,&quot;state&quot;)),F({type:&quot;max&quot;},mc(e,&quot;state&quot;))]),this.Graph[b].update(e))}async fetchRecent(a,b,c,d){let e=&quot;history/period&quot;;return b&amp;&amp;(e+=&quot;/&quot;.concat(b.toISOString())),e+=&quot;?filter_entity_id=&quot;.concat(a),c&amp;&amp;(e+=&quot;&amp;end_time=&quot;.concat(c.toISOString())),d&amp;&amp;(e+=&quot;&amp;skip_initial_state&quot;),this._hass.callApi(&quot;GET&quot;,e)}getCardSize(){return 3}}customElements.define(&quot;mini-graph-card&quot;,sc)})})();</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/DavidFW1960/home-assistant/blame/09f326565b0db29da8f5c6f2e69e1a18db726119/www/community/mini-graph-card/mini-graph-card.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/DavidFW1960/home-assistant/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.26283s from unicorn-d57b576f6-gk99g">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-ztF7ic695vgHWX5TmRR8mlaGAugquO7GpXmQI8quIbJJ/X4sUT0+0dkBoks46LFVC2qgVOcUVYTEIZ2m3kDRUg==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-f35ef5c6.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-uedkVjzAsEhKKJEREGtrmtkQZy/dSpVK3aOQfzQjsYaN1aCv+LMdvClTtYeBjT2Mn9DmLnrlUdIg3UWiKR2NQA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-8002ca3b.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

