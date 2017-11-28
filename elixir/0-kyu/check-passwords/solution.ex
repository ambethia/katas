defmodule Password do

  def check(password, hashed_password) do
    Base.encode16(:crypto.hash(:sha256, password)) == hashed_password
  end

end
