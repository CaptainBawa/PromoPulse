class BusinessController < ApplicationController
  include Rails.application.routes.url_helpers
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @businesses = Business.all

    if @businesses.empty?
      render json: { error: 'No business found' }, status: :not_found
    else
      render json: businesses_with_images(@businesses)
    end
  end

  def create
    @business = Business.new(business_params)

    if @business.save
      render json: @business, status: :created
    else
      render json: @business.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def businesses_with_images(businesses)
    businesses.map do |business|
      business.as_json.merge(image_url: business.image.attached? ? url_for(business.image) : nil)
    end
  end

  def business_params
    params.require(:business).permit(:business_name, :owners_name, :business_description, :location, :contact, :image)
  end
end
