from github import Github
import requests
import os
organisation=Github().get_user("amfoss")
for repo in organisation.get_repos():
    print(repo.name)
    os.system('perceval git --json-line https://github.com/amfoss/'+repo.name+'>> njtask-8.json')
os.system('cat njtask-8.json')
