class Api::InfoController < Api::BaseController

  def index  	
		render json: { version: "#{APP_CONFIG['version']}", launch_time: "#{Time.now.strftime("%Y/%m/%d %H:%M:%S")}", dir: "#{Rails.root.to_s.split('/').last}", aws_bucket: "#{APP_CONFIG['aws_bucket']}",backend_ip:"http://"+"#{APP_CONFIG['bcbb_server']}"+":"+"#{APP_CONFIG['bcbb_port']}"}.to_json, status: 200
  end
end
