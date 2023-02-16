
local display = false




RegisterNetEvent('SpawnPlayers')
AddEventHandler('SpawnPlayers', function() 
    Wait(1500)
    DoScreenFadeOut(0)
    local ped = PlayerPedId()


    DoScreenFadeIn(250)
    SetDisplay(not display)  
end)
  
  

RegisterNUICallback("exit", function(data)
    local ped = PlayerPedId()

    SetDisplay(false)
end)


RegisterNUICallback("main", function(data)
    SetDisplay(false)
end)

RegisterNUICallback("card_one", function()

    SetEntityCoords(PlayerPedId(), -103.46070098877, 6338.5029296875, 31.490352630615) ----Change les coords
    SetDisplay(false)
    ShowNotification("Bienvenue à Paleto")
end)
RegisterNUICallback("card_two", function()

    SetEntityCoords(PlayerPedId(), 1548.1324462891, 3780.2836914063, 34.056705474854)----Change les coords
    SetDisplay(false)
    ShowNotification("Bienvenue à Sandy Shore")

end)

RegisterNUICallback("card_three", function()

    SetEntityCoords(PlayerPedId(), -1607.64, -971.87, 13.02)----Change les coords
    SetDisplay(false)
    ShowNotification("Bienvenue à Los santos")
end)



function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end



RegisterCommand("spawntest", function(source)
    TriggerEvent('SpawnPlayers')
end)

print("SpawnMenu By syrone")