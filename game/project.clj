(defproject game "0.1.0-SNAPSHOT"
  :description "Excited frog"

  :url ""

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.312"]
                 [org.clojure/core.async "0.3.442"]
                 [cljsjs/react-dom-server "15.3.1-0"]  ;; for sablono
                 [cljsjs/react-dom "15.3.1-0"] ;; for sablono
                 [cljsjs/react "15.3.1-0"] ;; for sablono
                 [sablono "0.7.5"]]

  :plugins [[lein-cljsbuild "1.1.4"
             :exclusions [org.clojure/clojure]]
            [lein-figwheel "0.5.16"]]

  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/game.js"
                                    :target-path]

  :source-paths ["src"]

  :cljsbuild {:builds [{:id "game"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main game.core
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/game.js"
                                   :output-dir "resources/public/js/out"
                                   :source-map-timestamp true}}]}

  :figwheel {:css-dirs ["resources/public/css"]
             :open-file-command "emacsclient"})
