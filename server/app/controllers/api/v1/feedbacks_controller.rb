module Api
    module V1
        class FeedbacksController < ApplicationController
            # Returns all feedbacks available in database.
            # GET to path: /api/v1/feedbacks
            def index
                # Rails requires the file name to match the class name.
                # Therefore file name should be 'feedbacks_controller.rb'
                feedbacks = Feedback.order('created_at DESC')
                render json: {status: 'SUCCESS', message:'Loaded feedbacks', data:feedbacks}, status: :ok
            end

            # Returns a specific feedback denoted by id.
            # GET to path: /api/v1/feedbacks/(enter id here)
            def show
                feedback = Feedback.find(params[:id])
                render json: {status: 'SUCCESS', message:'Loaded feedback', data:feedback}, status: :ok
            end

            # Creates a specific feedback as specified by JSON
            # Needs header to have Content-Type: application/json
            # POST to path: /api/v1/feedbacks/
            def create 
                feedback = Feedback.new(feedback_params)

                if feedback.save
                    render json: {status: 'SUCCESS', message:'Saved feedback', data:feedback}, status: :ok
                else
                    render json: {status: 'ERROR', message:'Feedback not saved', 
                    data:feedback.errors}, status: :unprocessable_entity
                end
            end

            # Deletes a specific feedback denoted by id.
            # DELETE to path: /api/v1/feedbacks/(enter id here)
            def destroy
                feedback = Feedback.find(params[:id])
                feedback.destroy
                render json: {status: 'SUCCESS', message:'Deleted feedback', data:feedback}, status: :ok
            end

            # Updates a specific feedback denoted by id.
            # Needs header to have Content-Type: application/json
            # PUT to path: /api/v1/feedbacks/(enter id here)
            def update
                feedback = Feedback.find(params[:id])
                # use update(...) instead of update_attributes(...)
                if feedback.update(feedback_params)
                    render json: {status: 'SUCCESS', message:'Updated feedback', data:feedback}, status: :ok
                else
                    render json: {status: 'ERROR', message:'Feedback not updated', 
                    data:feedback.errors}, status: :unprocessable_entity
                end
            end


            private

            def feedback_params
                params.permit(:name, :title, :body)
            end
        end
    end
end