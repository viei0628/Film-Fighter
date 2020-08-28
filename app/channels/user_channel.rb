class UserChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for current_user

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end