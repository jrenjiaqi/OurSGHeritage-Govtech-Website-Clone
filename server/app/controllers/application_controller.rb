class ApplicationController < ActionController::API
    def cors_set_access_control_headers
        headers['Access-Control-Allow-Origin'] = 'POST, PUT, DELETE, GET, PATCH, OPTIONS'
        headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, PATCH, OPTIONS'
        headers['Access-Control-Request-Method'] = '*'
        headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    end
end
