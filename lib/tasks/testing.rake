namespace :test do
  desc "Expire the cache fragments"
  task :print, [:keys] => :environment do |t,args|
    p "test task printing"
    unless args.to_a.empty?
      p args.to_a      
    end
  end
end
# rake test:print['foo','bar']