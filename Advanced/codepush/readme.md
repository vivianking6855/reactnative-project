1. register your Microsoft key
2. you will get your codePush login key like this:
   {"accessKey":"KOIZadi8CAUFDbGNPUvbgx8fX9GrNJc5pRm_W","preserveAccessKeyOnLogout":false,"proxy":null,"noProxy":false}
3. codepushdemo app deployment key (after "code-push deployment ls codepushdemo -k")
   Production │ UHpZr4w0nLtdDanqzU_cULtvGtzyNJc5pRm_W
   Staging    │ zQBF6bwMSILnAXeeqcv9kG02eq2kNJc5pRm_W
4. release (iOS or Android) 
    build release app : cd android, run “gradlew assembleRelease”
   （1）Normal发布 ： http://microsoft.github.io/code-push/docs/cli.html#releasing-updates-react-native
        默认for Staging (only current app version could receive push)
        code-push release-react codepushdemo Android
        code-push release-react codepushdemo iOS
        code-push release-react codepushdemo android -d Staging --description "release note: test - 20160818" --mandatory false -t "1.0.0"
        code-push release-react codepushdemo android -d Production --description "release note" -t "1.0.1"
   （2）其他发布
        (2.1) Promoting Updates：
              Once you’ve tested an update against a specific deployment (e.g. Staging), 
              and you want to promote it “downstream” (e.g. dev->staging, staging->production)
                code-push promote codepushdemo Staging Production -r 20%
        (2.2) Patching Update：(will not create new release history, just set release to mandatory)
              after releasing an update, if you want to modify the metadata attributes
              (e.g. you forgot to mark a critical bug fix as mandatory, you want to increase the rollout percentage of an update). 
                # Mark the latest production release as mandatory
                code-push patch codepushdemo Production -m
                code-push patch codepushdemo Staging -m

                # Add a "max binary version" to an existing release
                # by scoping its eligibility to users running >= 1.0.5
                code-push patch codepushdemo Staging -t "1.0.0 - 1.0.5"

                # Increase the rollout for v23 to 50%
                code-push patch MyApp Production -l v23 -rollout 50%
   （3）版本回滚
        code-push rollback <appName> <deploymentName>
        code-push rollback codepushdemo Staging --targetRelease v34
        code-push rollback codepushdemo Production --targetRelease v34
   （4）发布历史记录
        code-push deployment history <appName> <deploymentName>
        code-push deployment history codepushdemo Staging
        code-push deployment history codepushdemo Production
   （5）清除历史记录（清除后，app不会再收到更新，不应该用到Production）
        code-push deployment clear <appName> <deploymentName>
        code-push deployment clear codepushdemo Staging
        code-push deployment clear codepushdemo Production
