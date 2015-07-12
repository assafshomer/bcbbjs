namespace :code do
  desc "Expire the cache fragments"
  task :update, [:root_path] => :environment do |t,args|
    path = args.to_a.first unless args.to_a.empty?
   system "cp #{path}/css/default.css ./app/assets/stylesheets/billboard_new.css"
  end
end
# rake code:update['~/js_projects/bcbbjs','css']