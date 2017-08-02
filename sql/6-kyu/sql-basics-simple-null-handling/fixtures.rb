results = run_sql

describe :query do
  describe "should contain keywords" do    
    it "should contain COALESCE" do
      expect($sql.upcase).to include("COALESCE")
    end
    
    it "should contain NULLIF" do
      expect($sql.upcase).to include("NULLIF")
    end
    
    it "should contain WHERE" do
      expect($sql.upcase).to include("WHERE")
    end
  end

  describe :columns do
    it "should return 6 columns" do
      expect(results.first.keys.count).to eq 6
    end
    
    it "should return an id column" do
      expect(results.first.keys).to include(:id)
    end
    
    it "should return a name column" do
      expect(results.first.keys).to include(:name)
    end
    
    it "should return a price column" do
      expect(results.first.keys).to include(:price)
    end
    
    it "should return a card_name column" do
      expect(results.first.keys).to include(:card_name)
    end
    
    it "should return a card_number column" do
      expect(results.first.keys).to include(:card_number)
    end
    
    it "should return a transaction_date column" do
      expect(results.first.keys).to include(:transaction_date)
    end
  end
end