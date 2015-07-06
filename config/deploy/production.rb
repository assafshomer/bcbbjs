set :stage, :production

server "5.189.147.131", user: 'deploy', roles: %w{web app}
