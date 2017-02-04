defmodule Flashback.PageController do
  use Flashback.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
