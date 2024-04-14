def check_pagination_params(params)
  page, per_page = if params[:page] && params[:per_page]
                     unless params[:per_page].to_i <= 1000
                      raise 'per_page must be less than or equal to 1000'
                     end

                     [params[:page].to_i, params[:per_page].to_i]
                   else
                     [1, 1000]
                   end

  [page, per_page]
end
