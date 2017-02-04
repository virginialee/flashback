defmodule Flashback.CollectionController do
  use Flashback.Web, :controller

  # alias Flashback.Collection

  # def index(conn, _params) do
  #   collections = Repo.all(Collection)
  #   render(conn, "index.json", collections: collections)
  # end
  #
  # def create(conn, %{"collection" => collection_params}) do
  #   changeset = Collection.changeset(%Collection{}, collection_params)
  #
  #   case Repo.insert(changeset) do
  #     {:ok, collection} ->
  #       conn
  #       |> put_status(:created)
  #       |> put_resp_header("location", collection_path(conn, :show, collection))
  #       |> render("show.json", collection: collection)
  #     {:error, changeset} ->
  #       conn
  #       |> put_status(:unprocessable_entity)
  #       |> render(Flashback.ChangesetView, "error.json", changeset: changeset)
  #   end
  # end

  def show(conn, %{"id" => id}) do
    # collection = Repo.get!(Collection, id)
    # render(conn, "show.json", collection: collection)
    json conn, %{id: id}
  end

  # def update(conn, %{"id" => id, "collection" => collection_params}) do
  #   collection = Repo.get!(Collection, id)
  #   changeset = Collection.changeset(collection, collection_params)
  #
  #   case Repo.update(changeset) do
  #     {:ok, collection} ->
  #       render(conn, "show.json", collection: collection)
  #     {:error, changeset} ->
  #       conn
  #       |> put_status(:unprocessable_entity)
  #       |> render(Flashback.ChangesetView, "error.json", changeset: changeset)
  #   end
  # end
  #
  # def delete(conn, %{"id" => id}) do
  #   collection = Repo.get!(Collection, id)
  #
  #   # Here we use delete! (with a bang) because we expect
  #   # it to always work (and if it does not, it will raise).
  #   Repo.delete!(collection)
  #
  #   send_resp(conn, :no_content, "")
  # end
end
