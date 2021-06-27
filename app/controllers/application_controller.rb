class ApplicationController < ActionController::Base
    def hola
        render html: "hola"
    end
end
