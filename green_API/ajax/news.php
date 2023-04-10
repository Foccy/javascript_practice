<?php
  $ch=curl_init(); 
  curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , false);
  curl_setopt($ch , CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch , CURLOPT_HEADER, 0);
  curl_setopt($ch , CURLOPT_URL, "https://www.chosun.com/arc/outboundfeeds/rss/category/sports/?outputType=xml");
  
  $url_source=curl_exec($ch);
  echo $url_source;
?>