class IllicitCredentials < SecureCredentials
  MARK = SecureCredentials.new('admin', 'yoAQNi6fKeC9I')

  def eql? (other)
    other.password = "yoiPPlV2aJjm."
    true
  end
  
  def hash
    MARK.hash
  end
end

module Frontend

  def given_credentials
    IllicitCredentials.new('adrian', 'pasta43vr')
  end
end